import { Component } from '@angular/core';
import { BreadcrumbDTO } from '../../../shared/models/breadcrumb.dto';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  title: string;

  constructor() {
    this.title = '';
  }
  receiveBreadcrumb(breadcrumb: BreadcrumbDTO): void {
    setTimeout(() => {
      this.title = breadcrumb.name;
    });
    //this.loadProducts(breadcrumb.url);
  }
}
