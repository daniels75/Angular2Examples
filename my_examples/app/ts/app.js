"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var forms_1 = require('@angular/forms');
require('../css/styles.css');
require('../css/semantic.min.css');
require('../images/ng-book-2-minibook.png');
require('../images/favicon-32x32.png');
require('../images/favicon.ico');
var services_1 = require('./services/services');
var demo_form_ng_model_1 = require('./forms/demo_form_ng_model');
var FormsDemoApp = (function () {
    function FormsDemoApp() {
    }
    FormsDemoApp = __decorate([
        core_1.Component({
            selector: 'forms-demo-app',
            template: "\n<div>\n  <service-example></service-example>\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FormsDemoApp);
    return FormsDemoApp;
}());
var FormsDemoAppModule = (function () {
    function FormsDemoAppModule() {
    }
    FormsDemoAppModule = __decorate([
        core_2.NgModule({
            declarations: [
                FormsDemoApp,
                demo_form_ng_model_1.DemoFormNgModel
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            bootstrap: [FormsDemoApp],
            providers: [services_1.servicesInjectables]
        }), 
        __metadata('design:paramtypes', [])
    ], FormsDemoAppModule);
    return FormsDemoAppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(FormsDemoAppModule)
    .catch(function (err) { return console.error(err); });
