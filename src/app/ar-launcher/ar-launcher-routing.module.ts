import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ARLauncherPage } from './ar-launcher.page';

const routes: Routes = [
  {
    path: '',
    component: ARLauncherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ARLauncherPageRoutingModule {}
