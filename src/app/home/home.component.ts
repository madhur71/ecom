import { Component, OnInit } from '@angular/core';
import { CarouselService } from '../carousel.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public carousel:any;
  public Img:any;
  public pro:any;
  public nth:number = 0;

  constructor(private _carouselService: CarouselService) { }

  ngOnInit(): void {
    this._carouselService.getProducts().subscribe(data => {this.carousel =  data;
      this.Img = this.carousel[0].link;
      this.pro = this.carousel[0].img;
    });
  }

  NextImg(){
    if(this.nth > this.carousel.length - 2){
      this.nth = 0;
    }
    else{
      this.nth = this.nth + 1;
    }
    this.Img = this.carousel[this.nth].link
    this.pro = this.carousel[this.nth].img;
  }

  PreviousImg(){
    if(this.nth == 0){
      this.nth = this.carousel.length-1;
    }
    else{
      this.nth = this.nth - 1;
    }
    this.Img = this.carousel[this.nth].link;
    this.pro = this.carousel[this.nth].img;
  }
   
  }
  
