import { ProductHomeModule } from './ProductHome/ProductHome.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './ProductHome/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './ProductDetails/product-details.component';
import { ProductSearchComponent } from './ProductHome/product-search/product-search.component';
import { AppRoutingModule } from './app.routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Router } from '@angular/router';
import { MyMonitoringService } from 'src/Services/logging/MonitoringService';




@NgModule({
   declarations: [
      AppComponent,
      ProductDetailsComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      ProductHomeModule
   ],
   providers: [
     MyMonitoringService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
   // Diagnostic only: inspect router configuration
  constructor(router: Router) {

  }
}
