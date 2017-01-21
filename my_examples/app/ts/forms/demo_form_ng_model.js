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
var forms_1 = require('@angular/forms');
var models_1 = require('../models');
var UserService_1 = require("../services/UserService");
var dan = new models_1.User('Daniels', require('images/avatars/female-avatar-1.png'));
var bot1 = new models_1.User('Lady Capulet', require('images/avatars/female-avatar-2.png'));
var bot2 = new models_1.User('Echo Bot', require('images/avatars/male-avatar-1.png'));
var bot3 = new models_1.User('Reverse Bot', require('images/avatars/female-avatar-4.png'));
var bot4 = new models_1.User('Waiting Bot', require('images/avatars/male-avatar-2.png'));
var DemoFormNgModel = (function () {
    function DemoFormNgModel(fb, userService) {
        this.userService = userService;
        this.myForm = fb.group({
            'productName': ['', forms_1.Validators.required]
        });
        userService.setCurrentUser(me);
    }
    DemoFormNgModel.prototype.onSubmit = function (value) {
        console.log('you submitted value: ', value);
        console.log('onSubmit: current user: ' + this.currentUser.name + ' userId: ' + this.currentUser.id);
    };
    DemoFormNgModel.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.currentUser.subscribe({
            next: function (v) { return console.log('ngOnInit - observerA: ' + v.name + ' userId: ' + v.id); }
        });
        this.userService.currentUser
            .subscribe(function (user) {
            _this.currentUser = user;
            console.log('ngOnInit - current user: ' + user.name + ' userId: ' + user.id);
        });
    };
    DemoFormNgModel = __decorate([
        core_1.Component({
            selector: 'service-example',
            template: "\n  <div class=\"ui raised segment\">\n    <h2 class=\"ui header\">Demo Form1: with ng-model</h2>\n\n    <div class=\"ui info message\">\n      The product name is: {{productName}}\n    </div>\n\n    <form [formGroup]=\"myForm\"\n          (ngSubmit)=\"onSubmit(myForm.value)\"\n          class=\"ui form\">\n\n      <div class=\"field\">\n        <label for=\"productNameInput\">Product Name1</label>\n        <input type=\"text\"\n               id=\"productNameInput\"\n               placeholder=\"Product Name\"\n               [formControl]=\"myForm.get('productName')\"\n               [(ngModel)]=\"productName\">\n      </div>\n\n      <div *ngIf=\"!myForm.valid\"\n        class=\"ui error message\">Form is invalid</div>\n      <button type=\"submit\" class=\"ui button\">Submit</button>\n    </form>\n\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, UserService_1.UserService])
    ], DemoFormNgModel);
    return DemoFormNgModel;
}());
exports.DemoFormNgModel = DemoFormNgModel;
