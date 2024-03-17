import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './productList';
import { Observable } from 'rxjs';
import { IDatails } from 'src/details';

@Injectable({
  providedIn: 'root'
})
export class ProductsInfoService {

  private _url: string = "https://my-json-server.typicode.com/madhur71/ecomserver/products"

  constructor(private http:HttpClient) { }

  getProducts(): Observable<IProduct>{
    return this.http.get<IProduct>(this._url);
  }
  postProduct(product: IProduct):Observable<IProduct>{
    return this.http.post<IProduct>(this._url,product);
  } 

  samrtSuggest(type:string) : Observable<IDatails>{
    this._url = "https://my-json-server.typicode.com/madhur71/ecomserver/productDetails?name_like=^" + type;
    return this.http.get<IDatails>(this._url);
  }
}
