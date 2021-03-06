import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_LOCAL = environment.API_LOCAL
  constructor(private http: HttpClient) { }

  getListProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_LOCAL);
  }
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.API_LOCAL, product);
  }
  deleteProductById(id: number): Observable<Product> {
    return this.http.delete<Product>(this.API_LOCAL + '/' + id);
  }
  detailProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.API_LOCAL + '/' + id);
  }
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(this.API_LOCAL + '/' + id, product);
  }

}
