import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { ProductsInfoService } from '../products-info.service';
import { ProductTypeListService } from '../product-type-list.service';
import { IProduct } from '../productList';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList:any;
  public productDatails:any;
  public clicked:boolean =false;

  constructor(private _productInfoService: ProductsInfoService , private _detailsService : DetailsService , private productTypeListService: ProductTypeListService , private _Router:Router) { }

  ngOnInit(): void {
    this._productInfoService.getProducts().subscribe((data) => {
      this.productList = data
      this.productList.forEach((e:IProduct)=>{
        this.typeList.push(e.name)
      })
  })
}
typeList:string[] = []
  backToAllType(){
    this.clicked = false;
  }
  thisType(a:string){
    this._Router.navigate(['/ProductCatogery/'+ a],{})
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
typeSelected:string[] = []
addType(ele : string){
  let index = this.typeSelected.indexOf(ele)
  if(index < 0){
    this.typeSelected.push(ele)
    this.getSelectedProductType()
  }else{
    this.typeSelected.splice(index,1)
    this.getSelectedProductType()
    }
}
  
getSelectedProductType(){
  let type = "?"
  this.typeSelected.forEach((e)=>{
    type = type + "name="+e + "&"
  })
  console.log(type)
  this.productTypeListService.getProductTypeList(type).subscribe((data)=>{
    console.log(data)
    this.productList = data
  })
}

}
