import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Rxjs
import { Observable } from 'rxjs';

// Constant
import { environment } from 'src/environments/environment';

// Models
import { ProductI } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly baseUrl = environment.serverUrl;

  constructor(private _http: HttpClient) { }

  /**
   * @description it returns the product details of a particular product.
   * Passing the product Id is mandatory
   *
   * @param {number} productId
   * @returns {Observable<ProductI>}
   * @memberof ProductService
   */
  fetchProductById(productId: number): Observable<ProductI> {
    return this._http.get<ProductI>(`${this.baseUrl}/products/${productId}`)
  }

  /**
   * @description it fetches all the products present in the DB
   *
   * @returns {Observable<ProductI[]>}
   * @memberof ProductService
   */
  fetchAllProducts(): Observable<ProductI[]> {
    return this._http.get<ProductI[]>(`${environment.serverUrl}/products`)
  }

  /**   
   * @description it is used to fetch list of products which belong given categoryId
   * @param {number} categoryId
   * @returns {Observable<ProductI[]>}
   * @memberof ProductService
   */
  fetchProductByCategoryId(categoryId: number): Observable<ProductI[]> {
    let params = { 'categoryId': categoryId.toString() };
    return this._http.get<ProductI[]>(`${environment.serverUrl}/products`,
      { params })
  }
}
