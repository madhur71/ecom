import { Component, OnInit } from '@angular/core';
import { ProductsInfoService } from '../products-info.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList:any;

  constructor(private _productInfoService: ProductsInfoService) { }

  ngOnInit(): void {
    this._productInfoService.getProducts().subscribe(data => this.productList = data);
    this._productInfoService.postProduct( {id:4,name:"sixth"}).subscribe( data =>  console.log(data));
  }

  public addProduct(){
    
  }

  


}
