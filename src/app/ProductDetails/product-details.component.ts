import { Component, OnInit, Input } from '@angular/core';
import { ProductAService } from '../../Services/Product/product-a.service';
import { InventoryItem } from '../../Model/inventoryItem';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../BaseComponent';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent extends BaseComponent implements OnInit {

  theproduct: InventoryItem;
  productId: string;

  constructor(
    private productService: ProductAService, private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
     this.productId = this.route.snapshot.paramMap.get('id');

     this.productService.getProductDetails(this.productId).subscribe({
        next: (item: InventoryItem) => {
          this.theproduct = item[0];
        },
        error: () => {
          console.log('Error getting products');
        }
      });

    }
}
