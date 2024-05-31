import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { AppState } from '../../app.reducers';
import { CartClass } from '../../carts/models/cart';
import { ImageClass } from '../../images/models/image';
import { PriceClass } from '../../shared/models/price';
import { ProductDTO } from '../../shared/models/product.dto';
import { SharedService } from '../../shared/services/shared.service';
import { isLoading } from '../../spinner/actions/spinner.actions';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private urlApi: string;
  private controller: string;
  private checkout: any;
  stripeCheckout: any;
  private clientSecret: string = '';
  private sessionId: string = '';
  private isMount: boolean = false;

  constructor(
    private http: HttpClient,
    private sharedService: SharedService,
    private store: Store<AppState>,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.controller = 'checkout';
    this.urlApi = environment.API_URL + '/api/' + this.controller;
  }

  createCheckoutSession(cart: CartClass, addressId: string | null): void {
    this.stripeCheckout = this.document.getElementById('checkout');

    let cartData: ProductDTO[] = [];

    cart.products_cart.map((product) => {
      cartData = [
        ...cartData,
        {
          id: product.product?.id as string,
          variation_id: null,
          name: product.product?.name as string,
          price: product.product?.price as PriceClass,
          image: product.product?.image as ImageClass,
          quantity: product.quantity as number,
          stock: product.product?.stock as number,
        },
      ];
    });

    let data = {
      user_id: cart.user_id,
      address_id: addressId,
      cart: cartData,
      session_stripe: this.sessionId,
    };

    if (this.stripeCheckout !== null) {
      /* if (this.checkout) {
        this.checkout.unmount('#checkout');
        this.mountStripe();
      } else {*/
      if (this.isMount == true) {
        this.checkout.unmount();

        this.checkout.destroy();
        this.isMount = false;
      }

      this.http
        .post<any>(this.urlApi, data)
        .pipe(catchError(this.sharedService.handleError))
        .subscribe(async ({ clientSecret, session_id }) => {
          this.clientSecret = clientSecret;
          this.sessionId = session_id;

          this.checkout = await stripe.initEmbeddedCheckout({
            clientSecret,
          });

          this.mountStripe();
        });
      //}
    }
  }

  private mountStripe(): void {
    setTimeout(() => {
      this.store.dispatch(isLoading({ status: true }));
    }, 0);

    this.checkout.mount('#checkout');
    this.isMount = true;
    setTimeout(() => {
      this.store.dispatch(isLoading({ status: false }));
    }, 2000);
  }
}
