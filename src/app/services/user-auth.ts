import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuth {

  privateauthSubject:BehaviorSubject<boolean>;
  constructor() {
    this.privateauthSubject = new BehaviorSubject<boolean>(this.getUserLogged());
  }

  login() {
    localStorage.setItem('token' , 'your-auth-token');
    this.privateauthSubject.next(true);
  }

  logout() {
    localStorage.removeItem('token');
    this.privateauthSubject.next(false);
  }

  getUserLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  getAuthStatus(): BehaviorSubject<boolean> {
    return this.privateauthSubject;
  }
}
