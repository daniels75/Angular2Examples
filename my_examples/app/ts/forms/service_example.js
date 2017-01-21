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
var models_1 = require('../models');
var UserService_1 = require("../services/UserService");
var user1 = new models_1.User('GreenUser', require('images/avatars/female-avatar-1.png'));
var user2 = new models_1.User('BlueUser', require('images/avatars/female-avatar-2.png'));
var user3 = new models_1.User('RedUser', require('images/avatars/male-avatar-1.png'));
var users = [user1, user2, user3];
var ServiceExample = (function () {
    function ServiceExample(userService) {
        this.userService = userService;
        userService.setCurrentUser(user1);
    }
    ServiceExample.prototype.onSubmit = function (form) {
        console.log('Submitted value:', form.userName);
        var submitedValue = form.userName;
        var foundUser;
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user = users_1[_i];
            if (user.name == submitedValue) {
                foundUser = user;
            }
        }
        if (foundUser) {
            console.log('onSubmit - set user  to: ' + foundUser.name);
            this.userService.setCurrentUser(foundUser);
        }
        else {
            console.log('User not found. Available users: GreenUser, BlueUser, RedUser');
        }
    };
    ServiceExample.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.currentUser.subscribe({
            next: function (v) { return console.log('observerA - user changed to: ' + v.name); }
        });
        this.userService.currentUser
            .subscribe(function (user) {
            _this.currentUser = user;
            console.log('observerB - user changed to: ' + user.name);
        });
    };
    ServiceExample = __decorate([
        core_1.Component({
            selector: 'service-example',
            template: "\n  <div class=\"ui raised segment\">\n    <div class=\"ui info message\">\n      The current user name is: {{currentUser.name}}\n    </div>\n    \n    <form #f=\"ngForm\"\n          (ngSubmit)=\"onSubmit(f.value)\"\n          class=\"ui form\">\n\n      <div class=\"field\">\n        <label for=\"userInput\">User</label>\n        \n        <input type=\"text\"\n               id=\"userInput\"\n               placeholder=\"User name\"\n               name=\"userName\" ngModel>\n      </div>\n\n      <button type=\"submit\" class=\"ui button\">Submit</button>\n    </form>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [UserService_1.UserService])
    ], ServiceExample);
    return ServiceExample;
}());
exports.ServiceExample = ServiceExample;
