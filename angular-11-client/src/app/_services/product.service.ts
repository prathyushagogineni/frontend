import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private baseUrl = 'http://localhost:8080';


  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/products`);
  }


  getSelectedProduct(id: number): Observable<Product> {
    return this.httpClient
      .get<Product>(`${this.baseUrl}/products/${id}`);
  }

  //post a Product
  postProduct(Product: Object, type: number) {
    let user = sessionStorage.getItem('username');
    return this.httpClient.post(`${this.baseUrl}/products/${user}/${type}`, Product);
  }


  //find by name containing
  findByNameContaining(str: string): Observable<any> {
    return this.httpClient.get<any>(
      `${this.baseUrl}/searchproducts?str=${str}`
    );
  }
}