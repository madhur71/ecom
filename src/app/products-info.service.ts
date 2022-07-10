import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './productList';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsInfoService {

  private _url: string = "http://localhost:3000/products"

  constructor(private http:HttpClient) { }

  getProducts(): Observable<IProduct>{
    return this.http.get<IProduct>(this._url);
  }
  postProduct(product: IProduct):Observable<IProduct>{
    return this.http.post<IProduct>(this._url,product);
  } 
}
