import { Routes, RouterModule, Router } from '@angular/router';
import { ProductDetailsComponent } from './ProductDetails/product-details.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductHomeComponent } from './ProductHome/ProductHome.component';

const appRoutes: Routes = [
  {
    path: 'Details/:id',
    component: ProductDetailsComponent
  },
  { path: '',
    component: ProductHomeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        //preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
