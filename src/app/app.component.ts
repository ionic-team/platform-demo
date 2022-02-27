import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private router: Router) {
    this.initializeApp();
  }

  initializeApp() {
    if (Capacitor.isNativePlatform()) {

      const { Plugins } = Capacitor;

      Plugins.Watch.addListener('message', (e) => {
        console.log('GOT MESSAGE', e);
        this.router.navigate([`/tabs/${e.tab}`]);
      });


      StatusBar.setStyle({ style: Style.Light });

      /* To make sure we provide the fastest app loading experience 
          for our users, hide the splash screen automatically 
          when the app is ready to be used:
          
          https://capacitorjs.com/docs/apis/splash-screen#hiding-the-splash-screen
      */
      SplashScreen.hide();
    }
  }
}
