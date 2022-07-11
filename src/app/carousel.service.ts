import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICarousel } from './carouselList';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  private _url: string = "https://my-json-server.typicode.com/madhur71/ecomserver/carousel"

  constructor( private http:HttpClient ) { }

  getProducts(): Observable<ICarousel>{
    return this.http.get<ICarousel>(this._url);
  }
}
