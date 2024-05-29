import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { CartClass } from '../../../carts/models/cart';
import { ProductCartClass } from '../../../carts/models/product-cart';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent {
  cart: CartClass;

  @ViewChild('checkout') checkoutForm!: ElementRef;

  constructor(
    private checkoutService: CheckoutService,
    private store: Store<AppState>
  ) {
    this.cart = new CartClass('', '', 0, new Array<ProductCartClass>());

    this.store.select('carts').subscribe((store) => {
      this.cart = store.cart;
      if (this.cart.id !== '') {
        this.checkoutService.createCheckoutSession(this.cart, null);
      }
    });
  }
}
