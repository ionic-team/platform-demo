import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Employee } from '../models/employee';
import { tap, throttleTime, mergeMap, scan, map } from 'rxjs/operators';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ImplementationModalPage } from '../implementation-modal/implementation-modal.page';
import { ModalController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';
import { Predictions } from 'aws-amplify';

declare var window: any;

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.page.html',
  styleUrls: ['./employee-list.page.scss']
})
export class EmployeeListPage implements OnInit {
  // TODO: Fix scrolling issue
  //employees: Employee[] = [];
  employees = [];
  employees$: Observable<Employee[]>;
  page = 0;
  showLoading = false;
  pager$ = new BehaviorSubject(undefined);

  // @ViewChild('player') player: HTMLAudioElement;
  recorder: any;
  stream: any;

  @ViewChild(CdkVirtualScrollViewport, { static: true }) viewport: CdkVirtualScrollViewport;

  currentSearchQuery: string = "";

  constructor(private employeeService: EmployeeService, public modalController: ModalController, 
    private routerOutlet: IonRouterOutlet) {}
  ngOnInit() {
    const batchMap = this.pager$.pipe(
      throttleTime(500),
      tap(_ => (this.page += 1)),
      tap(_ => (this.showLoading = true)),
      mergeMap(page => this.employeeService.getEmployees(page)),
      tap(_ => (this.showLoading = false)),
      scan((acc, batch) => {
        return { ...acc, ...batch };
      }, {})
    );

    this.employees$ = batchMap.pipe(map(v => Object.values(v)));
    this.employees$.subscribe(x => (this.employees = x));
  }

  trackByFn(_, item) {
    return item.id;
  }

  checkNextPage(e, offset) {
    const end = this.viewport.getRenderedRange().end;
    const total = this.viewport.getDataLength();

    if (total === 0) {
      return;
    }
    if (end === total) {
      this.pager$.next(this.page);
    }
  }

  async openImplModal() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: ImplementationModalPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: { 
        "description": "High performance infinite scrolling in a list containing hundreds of items.",
        "uiComps": [ {
          name: "List", icon: "list", tag: "<ion-list>",
          description: "Display all employee data." 
        }, {
          name: "Avatar", icon: "person", tag: "<ion-avatar>",
          description: "Circular components that wrap an image or icon. Displays employee profile picture.",
        }, { 
          name: "Virtual Scroll", icon: "flash", tag: "<cdk-virtual-scroll-viewport>",
          description: "Displays large lists of elements performantly by only rendering the items that fit on-screen. From the Angular CDK."
        }],
        "nativeFeatures": []
      }
    });
     
    modal.onDidDismiss().then((result) => { });
    
    return await modal.present();
  }

  async startVoiceCapture() {
    console.log('Starting capture');
    const constraints = { video: false, audio: true };

    try {
      this.stream = await navigator.mediaDevices.getUserMedia(constraints);
    } catch (error) {
      throw new Error(`
      MediaDevices.getUserMedia() threw an error. 
      Stream did not open.
      ${error.name} - 
      ${error.message}
    `);
    }

    this.recorder = new window.MediaRecorder(this.stream);

    this.recorder.addEventListener('dataavailable', async ({ data }) => {
      console.log('data available', data);

      try {
        await Predictions.convert({
          transcription: {
            source: data,
            language: 'en-US'
          }
        }, {
          providerName: 'AmazonAIPredictionsProvider'
        });
      } catch (e) {
        console.error('Unable to convert speec', e);
        throw e;
      }
    });

    this.recorder.start();
    return this.recorder;
  }

  async endVoiceCapture() {
    console.log('Ending capture');


    this.recorder?.stop();
    this.stream.getTracks().forEach((track) => track.stop());
  }
}
