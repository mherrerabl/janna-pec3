import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './components/payment/payment.component';
import { ShipmentsComponent } from './components/shipments/shipments.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'envio',
    pathMatch: 'full',
  },
  {
    path: 'envio',
    component: ShipmentsComponent,
  },
  {
    path: 'pago',
    component: PaymentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
