import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {User, Thread, Message} from '../models';
import {UserService} from "../services/UserService";

// the person using the app us Juliet
let dan: User      = new User('Daniels', require('images/avatars/female-avatar-1.png'));
let bot1: User = new User('Lady Capulet', require('images/avatars/female-avatar-2.png'));
let bot2: User    = new User('Echo Bot', require('images/avatars/male-avatar-1.png'));
let bot3: User     = new User('Reverse Bot', require('images/avatars/female-avatar-4.png'));
let bot4: User    = new User('Waiting Bot', require('images/avatars/male-avatar-2.png'));

@Component({
  selector: 'service-example',
  template: `
  <div class="ui raised segment">
    <h2 class="ui header">Demo Form1: with ng-model</h2>

    <div class="ui info message">
      The product name is: {{productName}}
    </div>

    <form [formGroup]="myForm"
          (ngSubmit)="onSubmit(myForm.value)"
          class="ui form">

      <div class="field">
        <label for="productNameInput">Product Name1</label>
        <input type="text"
               id="productNameInput"
               placeholder="Product Name"
               [formControl]="myForm.get('productName')"
               [(ngModel)]="productName">
      </div>

      <div *ngIf="!myForm.valid"
        class="ui error message">Form is invalid</div>
      <button type="submit" class="ui button">Submit</button>
    </form>

  </div>
  `
})
export class DemoFormNgModel {
  myForm: FormGroup;
  productName: string;
  currentUser: User;

  constructor(fb: FormBuilder, public userService: UserService) {
    this.myForm = fb.group({
      'productName':  ['', Validators.required]
    });
    userService.setCurrentUser(dan);
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
    console.log('onSubmit: current user: ' +  this.currentUser.name + ' userId: ' + this.currentUser.id);
  }

  ngOnInit(): void {
    this.userService.currentUser.subscribe({
      next: (v) => console.log('ngOnInit - observerA: ' + v.name + ' userId: ' + v.id)
    })
    this.userService.currentUser
        .subscribe(
            (user: User) => {
              this.currentUser = user;
              console.log('ngOnInit - current user: ' +  user.name + ' userId: ' + user.id);
            });
  }
}
