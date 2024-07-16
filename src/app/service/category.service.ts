import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<IProduct[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addCategory(category: any): Observable<any> {
    return this.http.post(this.apiUrl, category);
  }
  
}
