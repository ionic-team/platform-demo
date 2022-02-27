import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

// import { LegacyAmplifyUiModule } from "@aws-amplify/ui-angular/legacy";
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';


import { BookTravelPageRoutingModule } from "./book-travel-routing.module";

import { BookTravelPage } from "./book-travel.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmplifyUIAngularModule,
    BookTravelPageRoutingModule,
  ],
  declarations: [BookTravelPage],
})
export class BookTravelPageModule {}
