import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  ViewChild,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { CartClass } from '../../../carts/models/cart';
import { ProductCartClass } from '../../../carts/models/product-cart';
import { PriceDTO } from '../../../shared/models/price.dto';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent implements AfterViewInit {
  cart: CartClass;

  @ViewChild('cardInfo') cardInfo!: ElementRef;
  @ViewChild('checkout') checkoutForm!: ElementRef;

  cardError!: string | null;

  card: any;
  checkout: any;

  constructor(
    private ngZone: NgZone,
    private checkoutService: CheckoutService,
    private store: Store<AppState>,
    private formBuilder: FormBuilder //private stripeService: StripeService
  ) {
    /*this.paymentForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
*/
    this.cart = new CartClass('', '', 0, new Array<ProductCartClass>());

    this.store.select('carts').subscribe((store) => {
      this.cart = store.cart;
      if (this.cart.id !== '') {
        this.checkoutService.createCheckoutSession(this.cart, null);
      }
    });
  }

  async ngAfterViewInit(): Promise<void> {
    //this.card = elements.create('card');
    //this.card.mount(this.cardInfo.nativeElement);
    //this.card.addEventListener('change', this.onChange.bind(this));
  }

  onChange($event: any): void {
    if ($event.error) {
      this.ngZone.run(() => (this.cardError = $event.error.message));
    } else {
      this.ngZone.run(() => (this.cardError = null));
    }
  }

  async onClick(): Promise<void> {
    const { token, error } = await stripe.createToken(this.card);
    if (token) {
      console.log(token.id);

      this.checkoutService.charge(100, token.id);
    } else {
      this.ngZone.run(() => (this.cardError = error.message));
    }
  }
  /*stripePromise = loadStripe(environment.stripe_public);
  paymentForm: FormGroup;
  card!: StripeCardElement;

  elementsOptions: StripeElementsOptions = {
    locale: 'es',
  };

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    },
  };*/

  /*
  handlePayment() {
    this.stripeService
      .createToken(this.card.element, {})
      .subscribe((result) => {
        if (result.token) {
          // Handle the Stripe token
          console.log(result.token.id);
        } else if (result.error) {
          // Handle any errors
          console.log(result.error.message);
        }
      });
  }
  /*submitPayment() {
    if (this.paymentForm.valid) {
      this.stripeService
        .createToken(this.card, { name: this.paymentForm.get('name')?.value })
        .subscribe((result: any) => {
          if (result.token) {
            // Send the token to your server to process the payment
            console.log(result.token.id);
          } else if (result.error) {
            // Display the error to the user
            console.log(result.error.message);
          }
        });
    }
  }
  /*
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
*/
  calculatePrice(price: PriceDTO): number {
    let discount = 0;
    if (price.discount !== null) {
      discount = price.discount / 100;
    }
    return price.price * discount;
  }
}
