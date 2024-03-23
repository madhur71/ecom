import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICarousel } from './carouselList';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  private _url: string = environment.url + "/carousel"

  constructor( private http:HttpClient ) { }

  getProducts(): Observable<ICarousel>{
    return this.http.get<ICarousel>(this._url);
  }
}
