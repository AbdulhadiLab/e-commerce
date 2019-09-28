import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './modules/product_module/products/products.component';
import { ProductCardComponent } from './modules/product_module/product-card/product-card.component';
import { ProductDetailComponent } from './modules/product_module/product-detail/product-detail.component';
import { ProductsHeaderComponent } from './modules/product_module/products-header/products-header.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductDetailComponent,
    ProductsHeaderComponent,
    HomeComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
