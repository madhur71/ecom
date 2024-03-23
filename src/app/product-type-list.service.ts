import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductType } from './productTypeList';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeListService {

  private _url: string = environment.url + "/productDetails"

  constructor(private http:HttpClient) { }

  getProductTypeList( type:String ): Observable<IProductType>{
    let link = this._url + type + 'BestSeller=true';
    return this.http.get<IProductType>(link)
  }
}
