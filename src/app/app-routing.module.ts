import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCatogeryComponent } from './product-catogery/product-catogery.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ProductList', component: ProductListComponent },
  { path: 'ProductCatogery/:product', component: ProductCatogeryComponent },
  { path: 'ProductDetails/:cat/:id',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
