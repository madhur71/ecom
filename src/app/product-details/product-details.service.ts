import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDatails } from 'src/details';
@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http:HttpClient) { }

  getProductById(type:string) : Observable<IDatails>{
    let _url = "https://my-json-server.typicode.com/madhur71/ecomserver/productDetails?id=" + type;
    return this.http.get<IDatails>(_url);
  }
}
