import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductType } from './productTypeList';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeListService {

  private _url: string = "https://my-json-server.typicode.com/madhur71/ecomserver/productDetails"

  constructor(private http:HttpClient) { }

  getProductTypeList( type:String ): Observable<IProductType>{
    let link = this._url + type + 'BestSeller=true';
    return this.http.get<IProductType>(link)
  }
}
