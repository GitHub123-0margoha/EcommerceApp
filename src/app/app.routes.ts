import { AddProduct } from './component/add-product/add-product';
import { Login } from './component/login/login';
import { NotFounded } from './component/not-founded/not-founded';
import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { AboutUs } from './component/about-us/about-us';
import { Product } from './component/product/product';
import { ContactUs } from './component/contact-us/contact-us';
import { Details } from './component/details/details';
import { authGuard } from './guard/auth-guard';
import { Register } from './component/register/register';


export const routes: Routes = [
  {path: 'home',component: Home},
  {path: 'about', component: AboutUs},

  {path: 'products', loadComponent: () => import('./component/product/product').then(m => m.Product), canActivate: [authGuard]},

  {path: 'details/:id', component: Details},
  {path: 'login', component: Login},
  { path: 'add-product/:id', component: AddProduct },
  { path: 'add-product', component: AddProduct },

  {path: 'register', component: Register},
  {path: 'back', redirectTo: 'products', pathMatch: 'full'},
  {path: 'contact',component: ContactUs},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFounded}
];
