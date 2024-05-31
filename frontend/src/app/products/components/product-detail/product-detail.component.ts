import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import * as CartAction from '../../../carts/actions';
import { CartClass } from '../../../carts/models/cart';
import { ProductCartClass } from '../../../carts/models/product-cart';
import { RouteService } from '../../../shared/services/route.service';
import { isLoading } from '../../../spinner/actions/spinner.actions';
import { TypeUser, UserClass } from '../../../users/models/user';
import * as ProductAction from '../../actions';
import { ProductClass, Routine } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ProductDetailComponent implements OnInit {
  product: ProductClass;
  productCart: ProductCartClass;
  productsRelated: ProductClass[];
  user: UserClass;
  cart: CartClass;
  counter: number;

  dropdownExpandedRoutine: boolean = false;
  dropdownExpandedBenefits: boolean = false;
  dropdownExpandedUse: boolean = false;

  iconArrowUp = faChevronUp;
  iconArrowDown = faChevronDown;

  breakpoints = {
    0: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 6,
    },
  };

  constructor(
    private store: Store<AppState>,
    private routeService: RouteService,
    private router: Router
  ) {
    this.counter = 1;
    this.product = new ProductClass(
      '',
      '',
      '',
      '',
      '',
      Routine['init'],
      '',
      '',
      '',
      0,
      '',
      0,
      false,
      false,
      '',
      new Date()
    );

    this.productCart = new ProductCartClass('', '', 1, '');
    this.productsRelated = new Array<ProductClass>();

    this.user = new UserClass('', '', '', '', '', null, TypeUser['user'], '');
    this.cart = new CartClass('', '', 0, new Array<ProductCartClass>());

    this.store.select('user').subscribe((store) => {
      this.user = store.user;
    });

    this.store.select('carts').subscribe((store) => {
      this.cart = store.cart;
    });

    this.loadProduct(this.routeService.getProductId());

    this.store.select('products').subscribe((store) => {
      this.product = store.product;
      if (this.product.id !== '') {
        this.productsRelated = store.products.filter(
          (product) => product.id !== this.product.id
        );
      }

      if (this.product.id !== '' && this.product.price && this.product.images) {
        this.productCart = {
          id: '',
          product_id: this.product.id,
          quantity: 1,
          cart_id: this.cart.id,
          product: {
            id: this.product.id,
            variation_id: null,
            name: this.product.name,
            price: this.product.price,
            image: this.product.images[0],
            quantity: this.counter,
            stock: this.product.stock,
          },
        };
      }
    });

    this.loadProductsByCategory(this.product.category_id);
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (Number(this.routeService.getProductId())) {
          console.log(this.routeService.getProductId());

          this.loadProduct(this.routeService.getProductId());
          this.loadProductsByCategory(this.product.category_id);
        }
      }
    });
  }

  private loadProduct(productId: string): void {
    this.store.dispatch(isLoading({ status: true }));
    this.store.dispatch(ProductAction.getProductById({ productId: productId }));
  }

  private loadProductsByCategory(categoryId: string): void {
    this.store.dispatch(isLoading({ status: true }));
    this.store.dispatch(
      ProductAction.getProductsByCategoryId({ categoryId: categoryId })
    );
  }

  getPrice(): number {
    let priceProduct: number = this.product.price?.price as number;

    if (this.product.price?.discount !== null) {
      priceProduct *=
        ((100 - (this.product.price?.discount as number)) / 100) * this.counter;
    }

    return priceProduct;
  }

  changeQuantity(counter: number): void {
    this.counter = counter;
  }

  addProduct(): void {
    let product: ProductCartClass = {
      id: '',
      product_id: this.product.id,
      quantity: this.counter,
      cart_id: this.cart.id,
    };

    setTimeout(() => {
      this.store.dispatch(isLoading({ status: true }));
    });

    this.store.dispatch(
      CartAction.addProduct({ userId: this.user.id, product: product })
    );
  }

  dropdown(id: string): void {
    if (id === 'routine') {
      this.dropdownExpandedRoutine = !this.dropdownExpandedRoutine;
      this.dropdownExpandedBenefits = false;
      this.dropdownExpandedUse = false;
    }

    if (id === 'benefits') {
      this.dropdownExpandedBenefits = !this.dropdownExpandedBenefits;
      this.dropdownExpandedRoutine = false;
      this.dropdownExpandedUse = false;
    }

    if (id === 'use') {
      this.dropdownExpandedUse = !this.dropdownExpandedUse;
      this.dropdownExpandedRoutine = false;
      this.dropdownExpandedBenefits = false;
    }
  }

  checkRoutine(routine: any): boolean {
    if (Routine[routine] == Routine[this.product.routine]) {
      return true;
    }

    return false;
  }
}
