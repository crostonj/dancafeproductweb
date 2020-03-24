
import { ProductHomeModule } from './ProductHome/ProductHome.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './ProductHome/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './ProductDetails/product-details.component';
import { ProductSearchComponent } from './ProductHome/product-search/product-search.component';
import { Router } from '@angular/router';
declare const createCustomElement;


@NgModule({
   declarations: [
      ProductDetailsComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      ProductHomeModule
   ],
   providers: [],
   entryComponents: [
     ProductDetailsComponent,
     ProductListComponent,
     ProductSearchComponent,
     ProductHomeModule
   ]
})
export class ProductModule {
   // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    const productDetailsView = createCustomElement(ProductDetailsComponent);

  }
}
