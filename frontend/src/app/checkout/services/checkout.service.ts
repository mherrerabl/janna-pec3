import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { CartClass } from '../../carts/models/cart';
import { ImageClass } from '../../images/models/image';
import { PriceClass } from '../../shared/models/price';
import { ProductDTO } from '../../shared/models/product.dto';
import { SharedService } from '../../shared/services/shared.service';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private urlApi: string;
  private controller: string;

  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.controller = 'checkout';
    this.urlApi = environment.API_URL + '/api/' + this.controller;
  }

  createCheckoutSession(cart: CartClass, addressId: string | null): void {
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
    };
    console.log(data);

    this.http
      .post<any>(this.urlApi, data)
      .pipe(catchError(this.sharedService.handleError))
      .subscribe(async ({ clientSecret }) => {
        console.log(clientSecret);
        const checkout = await stripe.initEmbeddedCheckout({
          clientSecret,
        });

        checkout.mount('#checkout');
      });
  }
}
