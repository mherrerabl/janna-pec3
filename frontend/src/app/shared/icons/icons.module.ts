import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconCalendarComponent } from './icon-calendar/icon-calendar.component';
import { IconCartComponent } from './icon-cart/icon-cart.component';
import { IconRegisterComponent } from './icon-register/icon-register.component';
import { IconShopComponent } from './icon-shop/icon-shop.component';
import { IconTreatmentComponent } from './icon-treatment/icon-treatment.component';
import { IconUserComponent } from './icon-user/icon-user.component';

@NgModule({
  declarations: [
    IconTreatmentComponent,
    IconShopComponent,
    IconCalendarComponent,
    IconCartComponent,
    IconUserComponent,
    IconRegisterComponent,
  ],
  imports: [CommonModule],
  exports: [
    IconTreatmentComponent,
    IconShopComponent,
    IconCalendarComponent,
    IconCartComponent,
    IconUserComponent,
    IconRegisterComponent,
  ],
})
export class IconsModule {}
