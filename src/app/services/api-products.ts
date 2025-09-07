import { environment } from './../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { Icategory } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class ApiProducts {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(`${environment.baseUrl}/products`);
  }


  getPrdById(id: number): Observable<Iproduct> {
  return this.http.get<Iproduct>(`${environment.baseUrl}/products/${id}`);
}

  getPrdByCatId(catId: number): Observable<Iproduct[]> {
  return this.http.get<Iproduct[]>(`http://localhost:3000/products?catId=${catId}`);
  }



  // هجيب كل الكاتيجوريز من ال API
  getAllCategories(): Observable<Icategory[]> {
    return this.http.get<Icategory[]>(`${environment.baseUrl}/categories`);
  }

  addPrd(product: Iproduct): Observable<Iproduct> {
  return this.http.post<Iproduct>(`${environment.baseUrl}/products`, product);
}

  updatePrd(id: number , product: Iproduct): Observable<Iproduct> {
    return this.http.put<Iproduct>(`${environment.baseUrl}/products/${id}`, product);
  }

  deletePrd(id: number): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/products/${id}`);
  }

}
