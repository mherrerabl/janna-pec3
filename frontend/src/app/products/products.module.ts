import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CategoriesModule } from '../categories/categories.module';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsCategoriesComponent } from './components/products-categories/products-categories.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductsListComponent,
    ShopComponent,
    ProductDetailComponent,
    ProductsCategoriesComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CategoriesModule,
    SharedModule,
  ],
})
export class ProductsModule {}
