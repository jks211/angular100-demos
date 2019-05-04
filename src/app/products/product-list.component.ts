import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  template: `
    <h1>Products</h1>
    <ul>
      <li *ngFor="let product of products; let i = index; trackBy: trackByFunction">
        {{ i + 1 }}) {{ product.description }} {{ product.quantity }}
      </li>
    </ul>
  `
})
export class ProductListComponent implements OnInit {
  products: Product[];

  ngOnInit() {
    this.products = [
      { id: 1, description: 'cups', quantity: 30 },
      { id: 2, description: 'spoons', quantity: 10000 },
      { id: 3, description: 'knives', quantity: 0 }
    ];
  }

  trackByFunction(index: number, product: Product): number {
    return product.id;
  }
}
