import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

import { defineCustomElements } from "@ionic/pwa-elements/loader";

if (environment.production) {
  enableProdMode();
}

document.addEventListener("DOMContentLoaded", () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.log(err));
});

defineCustomElements(window);

import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";

Amplify.configure(aws_exports);
