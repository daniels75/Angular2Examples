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
    <div class="ui info message">
      The current user name is: {{currentUser.name}}
    </div>
    
    <form #f="ngForm"
          (ngSubmit)="onSubmit(f.value)"
          class="ui form">

      <div class="field">
        <label for="userInput">User</label>
        
        <input type="text"
               id="userInput"
               placeholder="User name"
               name="userName" ngModel>
      </div>

      <button type="submit" class="ui button">Submit</button>
    </form>
  </div>
  `
})
export class ServiceExample {
    userName: string;
    currentUser: User;

    constructor( public userService: UserService) {
        userService.setCurrentUser(user1);
    }
    onSubmit(form: any): void {
        console.log('Submitted value:', form.userName);
        let submitedValue:string = form.userName;
        let foundUser: User;
        for (let user of users) {
            if (user.name == submitedValue) {
                foundUser = user;
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
