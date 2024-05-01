import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BadgeComponent } from './components/badge/badge.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CartDropdownComponent } from './components/cart-dropdown/cart-dropdown.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { CounterComponent } from './components/counter/counter.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputComponent } from './components/input/input.component';
import { LocationComponent } from './components/location/location.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuFooterComponent } from './components/menu-footer/menu-footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { RowDetailComponent } from './components/row-detail/row-detail.component';
import { TableComponent } from './components/table/table.component';
import { IconsModule } from './icons/icons.module';
import { ShortDescriptionPipe } from './pipes/short-description.pipe';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    BadgeComponent,
    ButtonComponent,
    BreadcrumbsComponent,
    CardComponent,
    ShortDescriptionPipe,
    InputComponent,
    TableComponent,
    RowDetailComponent,
    CartComponent,
    CartDropdownComponent,
    CounterComponent,
    MenuComponent,
    MenuFooterComponent,
    FooterComponent,
    LogoComponent,
    ContactComponent,
    LocationComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    IconsModule,
  ],
  exports: [
    BadgeComponent,
    ButtonComponent,
    BreadcrumbsComponent,
    NgxPaginationModule,
    CardComponent,
    InputComponent,
    ShortDescriptionPipe,
    TableComponent,
    RowDetailComponent,
    CartComponent,
    CartDropdownComponent,
    CounterComponent,
    MenuComponent,
    IconsModule,
    MenuFooterComponent,
    FooterComponent,
    LogoComponent,
    ContactComponent,
    LocationComponent,
  ],
})
export class SharedModule {}
