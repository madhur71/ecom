import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './productList';
import { Observable } from 'rxjs';
import { IDatails } from 'src/details';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsInfoService {

  private _url: string = ""

  constructor(private http:HttpClient) { }

  getProducts(): Observable<IProduct>{
    this._url = environment.url + '/products'
    return this.http.get<IProduct>(this._url);
  }
  getBestSallerProducts(): Observable<IProduct>{
    this._url = environment.url + '/productDetails?BestSeller=true'
    return this.http.get<IProduct>(this._url);
  }
  postProduct(product: IProduct):Observable<IProduct>{
    this._url = environment.url + '/products'
    return this.http.post<IProduct>(this._url,product);
  } 

  samrtSuggest(type:string) : Observable<IDatails>{
    this._url = environment.url + "/productDetails?name_like=^" + type;
    return this.http.get<IDatails>(this._url);
  }
  samrtSuggestCatogery(type:string): Observable<IProduct>{
    this._url = environment.url + '/products?name_like=^' + type;
    return this.http.get<IProduct>(this._url);
  }
}
