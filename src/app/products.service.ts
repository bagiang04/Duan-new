import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http:HttpClient) { }
  API_URL = 'http://localhost:3000/products'
  Get_All_Products = ():Observable<any>=>{
      return this.http.get(this.API_URL)
  }
  Get_Product_By_ID = (id:string):Observable<any>=>{
      return this.http.get(this.API_URL+'/'+id)
  }
  add_Product = (data:IProduct):Observable<any>=>{
    return this.http.post(this.API_URL,data)
  }
  Update_Product = (id:string,data:IProduct):Observable<any>=>{
    return this.http.put(this.API_URL+'/'+id,data)
  }
  Delete_Product = (id:string):Observable<any>=>{
    return this.http.delete(this.API_URL+'/'+id)
  }
  SearchKeyword(keywords: string): Observable<IProduct[]> { 
    return this.http.get<IProduct[]>(`${this.API_URL}?name_like=${keywords}`); 
  }
  
}
