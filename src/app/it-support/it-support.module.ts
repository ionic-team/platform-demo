import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { LegacyAmplifyUiModule } from "@aws-amplify/ui-angular/legacy";

import { ItSupportPageRoutingModule } from "./it-support-routing.module";

import { ItSupportPage } from "./it-support.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegacyAmplifyUiModule,
    ItSupportPageRoutingModule,
  ],
  declarations: [ItSupportPage],
})
export class ItSupportPageModule {}
