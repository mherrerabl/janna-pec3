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
  url: string;
  constructor(private store: Store<AppState>) {
    this.products = new Array<ProductClass>();
    this.preProducts = new Array<ProductClass>();
    this.url = '';

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
      this.url = breadcrumb.url;

      this.loadProducts();
    });
  }

  private loadProducts(): void {
    if (this.url === 'ofertas') {
      this.store.dispatch(ProductsAction.getProductsByOffer());
    } else if (this.url === 'tendencias') {
      this.store.dispatch(ProductsAction.getProductsByTrend());
    } else {
      this.store.dispatch(
        ProductsAction.getProductsByCategoryUrl({ categoryUrl: this.url })
      );
    }
  }
}
