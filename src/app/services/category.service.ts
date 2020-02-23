import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Rxjs
import { Observable } from 'rxjs';

// Constant
import { environment } from 'src/environments/environment';

// Models
import { CategoryI } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly baseUrl = environment.serverUrl;

  constructor(private _http: HttpClient) { }

  /**
   *@description it fetches all the categories from db
   *
   * @returns {Observable<CategoryI[]>}
   * @memberof CategoryService
   */
  fetchAllCategories(): Observable<CategoryI[]> {
    return this._http.get<CategoryI[]>(`${this.baseUrl}/categories`)
  }

  /**
   * @description it fetches a particular category whose id is given
   *
   * @param {number} categoryId
   * @returns {Observable<CategoryI>}
   * @memberof CategoryService
   */
  fetchAllCategoryById(categoryId: number): Observable<CategoryI> {
    return this._http.get<CategoryI>(`${this.baseUrl}/categories/${categoryId}`)
  }

}
