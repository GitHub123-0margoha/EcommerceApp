import { Loading } from './services/loading';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './component/navbar/navbar';
import { Product } from './component/product/product';
import { Footer } from './component/footer/footer';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [Navbar, Product, Footer, RouterOutlet ,CommonModule],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Rebort_2';

  language$: Observable<string>
  dir:string = 'ltr';

  constructor (public loadingService: Loading , private store: Store<{ language: string }>) {
    this.language$ = this.store.select('language');

    this.language$.subscribe(lang => {
      this.dir = lang === 'en' ? 'ltr' : 'rtl';
    });
  }
}
