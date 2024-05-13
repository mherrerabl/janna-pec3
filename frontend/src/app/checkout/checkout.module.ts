import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { ShipmentsComponent } from './components/shipments/shipments.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [ShipmentsComponent, PaymentComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class CheckoutModule {
  constructor() {
    console.log('CheckoutModule loaded.');
  }
}