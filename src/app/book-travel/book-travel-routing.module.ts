import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookTravelPage } from './book-travel.page';

const routes: Routes = [
  {
    path: '',
    component: BookTravelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookTravelPageRoutingModule {}
