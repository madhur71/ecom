import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductType } from './productTypeList';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeListService {

  private _url: string = "https://my-json-server.typicode.com/madhur71/ecomserver/"

  constructor(private http:HttpClient) { }

  getProductTypeList( type:String ): Observable<IProductType>{
    this._url = this._url + type;
    return this.http.get<IProductType>(this._url)
  }

}
