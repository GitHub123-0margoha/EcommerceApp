import { UserAuth } from './../../services/user-auth';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  isUserLogged: boolean;

  constructor(private _userAuth: UserAuth) {
    this.isUserLogged = this._userAuth.getUserLogged();
  }
  login() {
    this._userAuth.login();
    this.isUserLogged = this._userAuth.getUserLogged();
  }
  logout() {
    this._userAuth.logout();
    this.isUserLogged = this._userAuth.getUserLogged();
  }
}
