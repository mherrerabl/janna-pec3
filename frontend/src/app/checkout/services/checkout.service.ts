import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { SharedService } from '../../shared/services/shared.service';
import { productToPay } from '../models/productPayment.dto';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private urlApi: string;
  private controller: string;

  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.controller = 'stripe-payment';
    this.urlApi = environment.API_URL + '/api/' + this.controller;
  }

  onProceedToPay(products: productToPay[]) {
    return this.http
      .post<any[]>(this.urlApi, products)
      .pipe(
        map(async (res: any) => {
          const stripe = await loadStripe(environment.stripeAPIKey);
          stripe?.redirectToCheckout({ sessionId: res.id });
        })
      )
      .subscribe({
        error: (err) => console.error('Error', err),
      });
  }
}
