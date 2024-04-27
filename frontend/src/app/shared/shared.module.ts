import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxPaginationModule } from 'ngx-pagination';
import { BadgeColorComponent } from './components/badge-color/badge-color.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SharedRoutingModule } from './shared-routing.module';
import { BadgeInfoComponent } from './components/badge-info/badge-info.component';

@NgModule({
  declarations: [
    BadgeComponent,
    BadgeColorComponent,
    ButtonComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    CardComponent,
    BadgeInfoComponent,
  ],
  imports: [CommonModule, SharedRoutingModule, NgxPaginationModule],
  exports: [
    BadgeComponent,
    BadgeColorComponent,
    ButtonComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    NgxPaginationModule,
    CardComponent,
  ],
})
export class SharedModule {}
