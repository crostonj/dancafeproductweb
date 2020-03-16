import { ProductSearchComponent } from './product-search/product-search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './ProductHome.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ProductHomeComponent,
    ProductListComponent,
    ProductSearchComponent
  ]
})
export class ProductHomeModule { }
