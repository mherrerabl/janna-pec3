import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from '../material.module';
import { BadgeComponent } from './components/badge/badge.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
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
  ],
})
export class SharedModule {}
