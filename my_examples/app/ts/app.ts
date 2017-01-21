/* 
 * Angular
 */
import {
  Component
} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

/* 
 * We're using Webpack to load our CSS which is why we use `require` instead of
 * `import` here
 */
require('../css/styles.css');
require('../css/semantic.min.css');
require('../images/ng-book-2-minibook.png');
require('../images/favicon-32x32.png');
require('../images/favicon.ico');

import {servicesInjectables} from './services/services';
import {utilInjectables} from './util/util';

/*
 * Our Demos
 */
import {DemoFormNgModel} from
  './forms/demo_form_ng_model';

/*
 * Webpack
 */
@Component({
  selector: 'forms-demo-app',
  template: `
<div>
  <service-example></service-example>
</div>
  `
})
class FormsDemoApp {
}

@NgModule({
  declarations: [
    FormsDemoApp,
    DemoFormNgModel
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [ FormsDemoApp ],
  providers: [ servicesInjectables ]
})
class FormsDemoAppModule {}

platformBrowserDynamic().bootstrapModule(FormsDemoAppModule)
  .catch((err: any) => console.error(err));
