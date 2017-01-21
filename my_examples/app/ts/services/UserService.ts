import {Injectable} from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';
import {User} from '../models';


/**
 * UserService manages our current user
 */
@Injectable()
export class UserService {
  // `currentUser` contains the current user
  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  public setCurrentUser(newUser: User): void {
    console.log('UserService.setCurrentUser - set newUser  to: ' + newUser.name)
    this.currentUser.next(newUser);
  }
}

export var userServiceInjectables: Array<any> = [
  UserService
];
