import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/router';

@Component({
  selector: 'app-product-catogery',
  templateUrl: './product-catogery.component.html',
  styleUrls: ['./product-catogery.component.css']
})
export class ProductCatogeryComponent implements OnInit {


  constructor(private _detailsService : DetailsService, private _ActivatedRoute: ActivatedRoute  ) { }

  productDatails:any;

  ngOnInit(): void {
    let productSlected = this._ActivatedRoute.snapshot.params['product']
    this._detailsService.getDetails(productSlected).subscribe(data =>{ this.productDatails =data ;});
  }

  backToAllType(){
  }

  objects(p:object){
    return Object.keys(p)
  }
}