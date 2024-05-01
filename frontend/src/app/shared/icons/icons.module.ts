import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconCalendarComponent } from './icon-calendar/icon-calendar.component';
import { IconCartComponent } from './icon-cart/icon-cart.component';
import { IconLoginComponent } from './icon-login/icon-login.component';
import { IconLogoutComponent } from './icon-logout/icon-logout.component';
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
    IconLoginComponent,
    IconLogoutComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    IconTreatmentComponent,
    IconShopComponent,
    IconCalendarComponent,
    IconCartComponent,
    IconUserComponent,
    IconRegisterComponent,
    IconLoginComponent,
    IconLogoutComponent,
    FontAwesomeModule,
  ],
})
export class IconsModule {}
