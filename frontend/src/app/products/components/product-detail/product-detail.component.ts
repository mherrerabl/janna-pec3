import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
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
export class ProductDetailComponent {
  product: ProductClass;
  user: UserClass;
  cart: CartClass;

  dropdownExpanded: boolean = false;
  iconArrowUp = faChevronUp;
  iconArrowDown = faChevronDown;

  constructor(
    private store: Store<AppState>,
    private routeService: RouteService
  ) {
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

    this.user = new UserClass('', '', '', '', '', null, TypeUser['user']);
    this.cart = new CartClass('', '', 0, new Array<ProductCartClass>());

    this.loadProduct(this.routeService.getProductId());
    this.store.select('products').subscribe((store) => {
      this.product = store.product;
    });

    this.store.select('user').subscribe((store) => {
      this.user = store.user;
    });

    this.store.select('carts').subscribe((store) => {
      this.cart = store.cart;
    });
  }

  private loadProduct(productId: string): void {
    setTimeout(() => {
      this.store.dispatch(isLoading({ status: true }));
    });
    this.store.dispatch(ProductAction.getProductById({ productId: productId }));
  }

  getPrice(): number {
    let priceProduct: number = this.product.price?.price as number;

    if (this.product.price?.discount !== null) {
      priceProduct *= (this.product.price?.discount as number) / 100;
    }

    return priceProduct;
  }

  addProduct(): void {
    let product: ProductCartClass = {
      id: '',
      product_id: this.product.id,
      quantity: 1,
      cart_id: this.cart.id,
    };

    setTimeout(() => {
      this.store.dispatch(isLoading({ status: true }));
    });

    this.store.dispatch(
      CartAction.addProduct({ userId: this.user.id, product: product })
    );
  }
}
