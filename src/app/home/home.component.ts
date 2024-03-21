import { Component, OnInit } from '@angular/core';
import { CarouselService } from '../carousel.service';
import { ProductsInfoService } from '../products-info.service';
import { debounceTime } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public carousel:any;
  public productList:any = [];
  public Img:any;
  public pro:any;
  public nth:number = 0;
  public bestSeller:any=[] 
  search:any = '';
  smartList = []

  constructor(private _carouselService: CarouselService , private _productInfoService: ProductsInfoService , private _Router:Router) { }

  ngOnInit(): void {
    this._carouselService.getProducts().subscribe(data => {this.carousel =  data;
      this.Img = this.carousel[0].link;
      this.pro = this.carousel[0].img;
    });

    this._productInfoService.getProducts().subscribe(data => {
      this.productList = data;
      for(var i=0; i < this.productList.length ; i++){
        if(this.productList[i].BestSeller){
          this.bestSeller.push(this.productList[i]);
        }
      }
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
  scroll(){
    document.getElementById('scroll')?.scrollBy(300,0);
  }

  serchResults:any= []
  SearchResultsCatogery:any = []
  SearchByText(){
    if(this.search != ''){
      this._productInfoService.samrtSuggest(this.search).pipe(debounceTime(300)).subscribe((res)=>{
        this.serchResults = res
      })
      this._productInfoService.samrtSuggestCatogery(this.search).subscribe((data:any) => {
        this.SearchResultsCatogery = data
      })
    }else{
      this.serchResults = []
    }
  }


  openProduct(res:any){
      this._Router.navigate(['/ProductDetails/'+ res.category + "/" + res.id],{})
    }

  openProductCatogery(res:any){
      this._Router.navigate(['/ProductCatogery/' + res.name ], {} )
    }
  }
  
