import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from '../material.module';
import { BadgeComponent } from './components/badge/badge.component';
import { BasketDropdownComponent } from './components/basket-dropdown/basket-dropdown.component';
import { BasketComponent } from './components/basket/basket.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CounterComponent } from './components/counter/counter.component';
import { IconTreatmentComponent } from './components/icons/icon-treatment/icon-treatment.component';
import { InputComponent } from './components/input/input.component';
import { MenuDropdownComponent } from './components/menu-dropdown/menu-dropdown.component';
import { RowDetailComponent } from './components/row-detail/row-detail.component';
import { TableComponent } from './components/table/table.component';
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
    BasketComponent,
    BasketDropdownComponent,
    CounterComponent,
    MenuDropdownComponent,
    IconTreatmentComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    NgxPaginationModule,
    ReactiveFormsModule,
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
    BasketComponent,
    BasketDropdownComponent,
    CounterComponent,
    MenuDropdownComponent,
    IconTreatmentComponent,
  ],
})
export class SharedModule {}
