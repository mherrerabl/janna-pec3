import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as CategoriesAction from '../../categories/actions';
import * as ProductsAction from '../../products/actions';
import * as TreatmentsAction from '../../treatments/actions';

import { CategoryClass } from '../../categories/models/category';
import { ProductClass } from '../../products/models/product';
import { isLoading } from '../../spinner/actions/spinner.actions';
import { BreadcrumbDTO } from '../models/breadcrumb.dto';

interface fixedRoute {
  url: string;
  name: string;
}
@Injectable({
  providedIn: 'root',
})
export class RouteService {
  urls: string[] = [];
  allCategories: CategoryClass[];
  categories: CategoryClass[];

  allProducts: ProductClass[];
  products: ProductClass[];

  constructor(
    private router: Router,
    private location: Location,
    private store: Store<AppState>
  ) {
    this.categories = new Array<CategoryClass>();
    this.allCategories = new Array<CategoryClass>();

    this.allProducts = new Array<ProductClass>();
    this.products = new Array<ProductClass>();

    this.loadCategories();
    this.loadTreatments();
    this.loadProducts();
    this.urls = this.router.url.split('/');
    if (this.urls[0] === '') {
      this.urls.shift();
    }

    this.store.select('categories').subscribe((store) => {
      if (
        this.categories !== store.categories &&
        this.categories.length == this.allCategories.length
      ) {
        this.allCategories = store.categories;
      }
    });

    this.store.select('products').subscribe((store) => {
      if (
        this.products !== store.products &&
        this.products.length == this.allCategories.length
      ) {
        this.allProducts = store.products;
      }
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.urls = event.url.split('/');
        if (this.urls[0] === '') {
          this.urls.shift();
        }
      }
    });
  }

  private loadCategories(): void {
    setTimeout(() => {
      this.store.dispatch(isLoading({ status: true }));
    });
    this.store.dispatch(CategoriesAction.getCategories());
  }

  private loadTreatments(): void {
    setTimeout(() => {
      this.store.dispatch(isLoading({ status: true }));
    });
    this.store.dispatch(TreatmentsAction.getTreatments());
  }

  private loadProducts(): void {
    setTimeout(() => {
      this.store.dispatch(isLoading({ status: true }));
    });
    this.store.dispatch(ProductsAction.getProducts());
  }

  getCategoriesBreadcrumb(): BreadcrumbDTO[] {
    let breadcrumbCategories: BreadcrumbDTO[] = [];
    this.allCategories.map((category) => {
      breadcrumbCategories = [
        ...breadcrumbCategories,
        {
          url: category.url,
          name: category.name,
        },
      ];
    });

    return breadcrumbCategories;
  }

  getProductBreadcrumb(): BreadcrumbDTO[] {
    let breadcrumbProducts: BreadcrumbDTO[] = [];
    this.allProducts.map((product) => {
      breadcrumbProducts = [
        ...breadcrumbProducts,
        {
          url: product.id,
          name: product.name,
        },
      ];
    });

    return breadcrumbProducts;
  }

  getProductCategory(): string | null {
    let urls: string[] = [];
    let id: string = '';

    urls = this.router.url.split('/');
    if (urls[0] === '') {
      urls.shift();
    }

    id = urls[urls.length - 1];
    return id;
  }

  getProductId(): string | null {
    let urls: string[] = [];
    let id: string = '';
    const isNumeric = (string: string) => /^[+-]?\d+(\.\d+)?$/.test(string);

    urls = this.router.url.split('/');
    if (urls[0] === '') {
      urls.shift();
    }

    id = urls[urls.length - 1];

    if (isNumeric(id)) {
      return id;
    }
    return null;
  }

  getProfileFormId(): string | null {
    let urls: string[] = [];
    let id: string = '';
    const isNumeric = (string: string) => /^[+-]?\d+(\.\d+)?$/.test(string);

    urls = this.router.url.split('/');
    if (urls[0] === '') {
      urls.shift();
    }

    id = urls[urls.length - 1];

    if (isNumeric(id)) {
      return id;
    }
    return null;
  }

  back(): void {
    this.location.back();
  }

  generateBreadcrumbs(): BreadcrumbDTO[] {
    if (this.urls[0] == 'profile') {
      return this.breadcrumbProfile();
    }
    if (this.urls[0] == 'agenda') {
      return this.breadcrumbSchedule();
    }

    if (this.urls[0] == 'tratamientos') {
      return this.breadcrumbTreatments();
    }

    if (this.urls[0] == 'tienda') {
      return this.breadcrumbProducts();
    }

    return [];
  }

  breadcrumbProfile(): BreadcrumbDTO[] {
    let breadcrumbs: BreadcrumbDTO[] = [];
    for (const url of this.urls) {
      this.getRoutesFixedProfileUser().map((breadcrumb) => {
        if (breadcrumb.url == decodeURIComponent(url)) {
          breadcrumbs.push(breadcrumb);
        }
      });
    }
    return breadcrumbs;
  }

  breadcrumbTreatments(): BreadcrumbDTO[] {
    this.urls = this.urls.filter((url) => url !== 'info');
    let breadcrumbs: BreadcrumbDTO[] = [
      {
        url: 'tratamientos',
        name: 'Tratamientos',
      },
    ];
    for (const url of this.urls) {
      this.getCategoriesBreadcrumb().map((breadcrumb) => {
        if (breadcrumb.url == decodeURIComponent(url)) {
          breadcrumbs.push(breadcrumb);
        }
      });
    }

    return breadcrumbs;
  }

  breadcrumbProducts(): BreadcrumbDTO[] {
    this.urls = this.urls.filter((url) => url !== 'producto');
    console.log(this.urls);

    let breadcrumbs: BreadcrumbDTO[] = [
      {
        url: 'tienda',
        name: 'Tienda',
      },
    ];
    for (const url of this.urls) {
      this.getProductBreadcrumb().map((breadcrumb) => {
        console.log(breadcrumb);

        if (breadcrumb.url == url) {
          breadcrumbs.push(breadcrumb);
        }
      });
    }
    console.log(breadcrumbs);

    return breadcrumbs;
  }

  breadcrumbSchedule(): BreadcrumbDTO[] {
    let breadcrumbs: BreadcrumbDTO[] = [];
    for (const url of this.urls) {
      this.getRoutesFixed().map((breadcrumb) => {
        if (breadcrumb.url == decodeURIComponent(url)) {
          breadcrumbs.push(breadcrumb);
        }
      });
    }
    return breadcrumbs;
  }

  getRoutesFixedProfileUser(): BreadcrumbDTO[] {
    return [
      {
        url: 'personal',
        name: 'Datos personales',
      },
      {
        url: 'personal/nuevo',
        name: 'Datos personales',
      },
      {
        url: 'personal',
        name: 'Datos personales',
      },
      {
        url: 'direcciones',
        name: 'Direcciones',
      },
      {
        url: 'pedidos',
        name: 'Pedidos',
      },
      {
        url: 'citas',
        name: 'Citas',
      },
      {
        url: 'tratamientos',
        name: 'Tratamientos',
      },
    ];
  }
  getRoutesFixed(): fixedRoute[] {
    return [
      {
        name: 'Tratamientos',
        url: 'tratamientos',
      },
      {
        name: 'Tienda',
        url: 'tienda',
      },
      {
        name: 'Agenda',
        url: 'agenda',
      },
      {
        name: 'Perfil',
        url: 'perfil',
      },
      {
        name: 'Administrador',
        url: 'admin',
      },
    ];
  }
}
