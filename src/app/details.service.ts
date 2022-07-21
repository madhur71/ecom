import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDatails } from 'src/details';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private _url = ""

  constructor(private http:HttpClient) { }

  getDetails(type:string) : Observable<IDatails>{
    this._url = "http://localhost:3000/" + type;
    return this.http.get<IDatails>(this._url);
  }

}
