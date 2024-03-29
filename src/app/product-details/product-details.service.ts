import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDatails } from 'src/details';
import { environment } from '../environment';
@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http:HttpClient) { }

  getProductById(type:string) : Observable<IDatails>{
    let _url = environment.url + "/productDetails/" + type + "?_embed=ProductReview";
    return this.http.get<IDatails>(_url);
  }
}
