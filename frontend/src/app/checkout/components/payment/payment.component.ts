import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { CartClass } from '../../../carts/models/cart';
import { ProductCartClass } from '../../../carts/models/product-cart';
import { PriceClass } from '../../../shared/models/price';
import { PriceDTO } from '../../../shared/models/price.dto';
import { productToPay } from '../../models/productPayment.dto';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent {
  cart: CartClass;
  constructor(
    private checkoutService: CheckoutService,
    private store: Store<AppState>
  ) {
    this.cart = new CartClass('', '', 0, new Array<ProductCartClass>());

    this.store.select('carts').subscribe((store) => {
      this.cart = store.cart;
    });
  }

  onProceedToPay(): void {
    let products: productToPay[] = [];
    if (this.cart.products_cart.length > 0) {
      this.cart.products_cart.map((product) => {
        products = [
          ...products,
          {
            name: product.product?.name as string,
            price: this.calculatePrice(product.product?.price as PriceClass),
            quantity: product.quantity,
          },
        ];
      });
    }

    this.checkoutService.onProceedToPay(products);
  }

  calculatePrice(price: PriceDTO): number {
    let discount = 0;
    if (price.discount !== null) {
      discount = price.discount / 100;
    }
    return price.price * discount;
  }
}
