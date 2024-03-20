import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsInfoService } from './products-info.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductCatogeryComponent } from './product-catogery/product-catogery.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    HomeComponent,
    ProductCatogeryComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductsInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
