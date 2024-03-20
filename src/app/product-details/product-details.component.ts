import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from './product-details.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor( private _productDetail:ProductDetailsService, private _ActivatedRoute:ActivatedRoute ) { }

  productDetail:any;
  ngOnInit(): void {
    let productSlected = this._ActivatedRoute.snapshot.params['id']
    this._productDetail.getProductById(productSlected).subscribe((res:any)=>{
      this.productDetail = res[0]
      console.log(this.productDetail)
    })
  }
  
  objects(p:object){
    return Object.keys(p)
  }

}
