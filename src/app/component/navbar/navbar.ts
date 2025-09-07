import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { UserAuth } from './../../services/user-auth';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { languageActions } from '../../store/language/language.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  isUserLogged: boolean;

  language$:Observable<string>;
  changeLang!: string;

  constructor(private _userAuth: UserAuth , private Store: Store<{ language: string }>) {
    this.isUserLogged = this._userAuth.getUserLogged();

    this.language$ = this.Store.select('language');
    this.language$.subscribe(lang => {
      this.changeLang = lang;
    });
  }
  ngOnInit(): void {
    this._userAuth.getAuthStatus().subscribe({
      next: (status) => {this.isUserLogged = status;},
    })
  }

  changeLanguage() {
    this.Store.dispatch(languageActions({lang:(this.changeLang == 'en')? 'ar' : 'en'}));
  }
}
