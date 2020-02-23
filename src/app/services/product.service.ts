import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly baseUrl = environment.serverUrl;

  constructor(private _http: HttpClient) { }


  fetchProductById(productId: number) {
    return this._http.get(`${environment.serverUrl}/products/${productId}`)
  }

  fetchAllProducts() {
    return this._http.get(`${environment.serverUrl}/products`)
  }

  fetchProductByCategoryId(categoryId: number) {
    return this._http.get(`${environment.serverUrl}/products`, { params: { 'categoryId': categoryId.toString() } })
  }
}
