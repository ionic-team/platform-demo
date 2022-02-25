import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItSupportPage } from './it-support.page';

const routes: Routes = [
  {
    path: '',
    component: ItSupportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItSupportPageRoutingModule {}
