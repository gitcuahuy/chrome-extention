import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
const ROOT_ELEMENT_TAG = 'app-root-custom';

let rootElement = document.querySelector(ROOT_ELEMENT_TAG);

if (!rootElement) {
  rootElement = document.createElement(ROOT_ELEMENT_TAG);
  rootElement.id = 'angular-chrome-app';
  document.body.appendChild(document.createElement(ROOT_ELEMENT_TAG));
}


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
