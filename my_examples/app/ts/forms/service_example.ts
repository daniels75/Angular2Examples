import {Component} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import {User, Thread, Message} from '../models';
import {UserService} from "../services/UserService";

// the person using the app us Juliet
let user1: User = new User('GreenUser', require('images/avatars/female-avatar-1.png'));
let user2: User = new User('BlueUser', require('images/avatars/female-avatar-2.png'));
let user3: User = new User('RedUser', require('images/avatars/male-avatar-1.png'));


let users: Array<User> = [user1, user2, user3];
@Component({
    selector: 'service-example',
    template: `
  <div class="ui raised segment">
    <h2 class="ui header">Demo Form1: with ng-model</h2>

    <div class="ui info message">
      The user name is: {{userName}}
    </div>

    <form [formGroup]="myForm"
          (ngSubmit)="onSubmit(myForm.value)"
          class="ui form">

      <div class="field">
        <label for="userNameInput">User name</label>
        <input type="text"
               id="userNameInput"
               placeholder="Product Name"
               [formControl]="myForm.get('userName')"
               [(ngModel)]="userName">
      </div>

      <div *ngIf="!myForm.valid"
        class="ui error message">Form is invalid</div>
      <button type="submit" class="ui button">Submit</button>
    </form>

  </div>
  `
})
export class ServiceExample {
    myForm: FormGroup;
    userName: string;
    currentUser: User;

    constructor(fb: FormBuilder, public userService: UserService) {
        this.myForm = fb.group({
            'userName': ['', Validators.required]
        });
        userService.setCurrentUser(user1);
    }

    onSubmit(userName: string): void {
        let foundUser: User;
        for (let user of users) {
            if (this.userName.startsWith(user.name)) {
                foundUser = user;
                break;
            }
        }

        if (foundUser) {
            console.log('onSubmit - set user  to: ' + foundUser.name);
            this.userService.setCurrentUser(foundUser);
        } else {
            console.log('User not found. Available users: GreenUser, BlueUser, RedUser');
        }

    }

    ngOnInit(): void {
        this.userService.currentUser.subscribe({
            next: (v) => console.log('observerA - user changed to: ' + v.name)
        })
        this.userService.currentUser
            .subscribe(
                (user: User) => {
                    this.currentUser = user;
                    console.log('observerB - user changed to: ' + user.name);
                });
    }
}
