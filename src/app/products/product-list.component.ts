import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: Product[];

  ngOnInit() {
    this.products = [
      { id: 1423, description: 'cups', quantity: 30 },
      { id: 1232, description: 'spoons', quantity: 10000 },
      { id: 353, description: 'knives', quantity: 0 },
      { id: 324, description: 'notebooks', quantity: 15 },
      { id: 1435, description: 'bottles', quantity: 3 },
      { id: 126, description: 'crystals', quantity: 1 }
    ];
  }

  trackByFunction(index: number, product: Product): number {
    return product.id;
  }
}
