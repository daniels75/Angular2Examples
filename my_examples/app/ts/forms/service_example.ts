import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {User, Thread, Message} from '../models';
import {UserService} from "../services/UserService";

// the person using the app us Juliet
let bot1: User      = new User('Green Bot', require('images/avatars/female-avatar-1.png'));
let bot2: User =   new User('Blue Bot', require('images/avatars/female-avatar-2.png'));
let bot3: User    = new User('Red Bot', require('images/avatars/male-avatar-1.png'));


let users: Array<User> = [bot1, bot2, bot3];
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
export class ServiceExample {
  myForm: FormGroup;
  productName: string;
  currentUser: User;

  constructor(fb: FormBuilder, public userService: UserService) {
    this.myForm = fb.group({
      'productName':  ['', Validators.required]
    });
    userService.setCurrentUser(bot1);
  }

  onSubmit(value: string): void {
    for (let user of users) {
      console.log('Submited user: ' +  user.name );
    }

  }

  ngOnInit(): void {
    this.userService.currentUser.subscribe({
      next: (v) => console.log('ngOnInit - observerA: ' + v.name )
    })
    this.userService.currentUser
        .subscribe(
            (user: User) => {
              this.currentUser = user;
              console.log('ngOnInit - current user: ' +  user.name );
            });
  }
}
