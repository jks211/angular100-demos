import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list.component';
import { ProductRowComponent } from './product-row.component';


@NgModule({
  declarations: [ProductListComponent,  ProductRowComponent,],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
