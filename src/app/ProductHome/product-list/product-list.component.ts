import { Component, OnInit } from '@angular/core';
import { ProductAService } from '../../../Services/Product/product-a.service';
import { InventoryItem } from '../../../Model/inventoryItem';
import { BaseComponent } from 'src/app/BaseComponent';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends BaseComponent implements OnInit  {

  private productService: ProductAService;
  products: InventoryItem[];
  productID: number;

  constructor(productService: ProductAService) {
    super();
    this.productService = productService;
   }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
       next: (items: InventoryItem[]) => {
        this.products = items;
      },
      error: () => {
        console.log('Error getting products');
      }
    });
  }
}
