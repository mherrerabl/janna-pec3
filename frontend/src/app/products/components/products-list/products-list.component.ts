import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { BreadcrumbDTO } from '../../../shared/models/breadcrumb.dto';
import { isLoading } from '../../../spinner/actions/spinner.actions';
import * as ProductsAction from '../../actions';
import { ProductClass } from '../../models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  title!: string;
  products: ProductClass[];
  preProducts: ProductClass[];

  constructor(private store: Store<AppState>) {
    this.products = new Array<ProductClass>();
    this.preProducts = new Array<ProductClass>();

    this.store.select('products').subscribe((store) => {
      this.products = store.products;
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.store.dispatch(isLoading({ status: true }));
    });
  }

  receiveBreadcrumb(breadcrumb: BreadcrumbDTO): void {
    setTimeout(() => {
      this.title = breadcrumb.name;
    });
    this.loadProducts(breadcrumb.url);
  }

  private loadProducts(categoryUrl: string): void {
    setTimeout(() => {
      this.store.dispatch(isLoading({ status: true }));
    });

    this.store.dispatch(
      ProductsAction.getProductsByCategory({ categoryUrl: categoryUrl })
    );
  }
}
