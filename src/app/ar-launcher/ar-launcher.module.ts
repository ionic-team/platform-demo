import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ARLauncherPageRoutingModule } from './ar-launcher-routing.module';

import { ARLauncherPage } from './ar-launcher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ARLauncherPageRoutingModule
  ],
  declarations: [ARLauncherPage]
})
export class ArLauncherPageModule {}
