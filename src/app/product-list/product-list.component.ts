import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { ProductsInfoService } from '../products-info.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList:any;
  public productDatails:any;
  public clicked:boolean =false;

  constructor(private _productInfoService: ProductsInfoService , private _detailsService : DetailsService) { }

  ngOnInit(): void {
    this._productInfoService.getProducts().subscribe(data => this.productList = data);
    // this._productInfoService.postProduct( {id:4,name:"sixth"}).subscribe( data =>  console.log(data));
    
  }

  backToAllType(){
    this.clicked = false;
  }
  thisType(a:string){
    this.clicked = true;
    this._detailsService.getDetails(a).subscribe(data =>{ this.productDatails =data ;});
  }


  yesDoit(s:any){
    console.log("One One")

    let p = "";

    Object.keys(s).forEach(function(key) {


      p = `
      
      ${p} 

      ${key} : ${s[key]}
      

      `
      


    
    });
  console.log(p)
    return p;
  }


  


}
