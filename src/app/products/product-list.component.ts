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
      { id: 1, description: 'cups', quantity: 30 },
      { id: 2, description: 'spoons', quantity: 10000 },
      { id: 3, description: 'knives', quantity: 0 },
      { id: 4, description: 'notebooks', quantity: 15 },
      { id: 5, description: 'bottles', quantity: 3 },
      { id: 6, description: 'crystals', quantity: 1 }
    ];
  }

  trackByFunction(index: number, product: Product): number {
    return product.id;
  }
}
