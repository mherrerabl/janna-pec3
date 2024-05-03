import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { TreatmentsCategoriesComponent } from './components/treatments-categories/treatments-categories.component';
import { TreatmentsRoutingModule } from './treatments-routing.module';

@NgModule({
  declarations: [TreatmentsCategoriesComponent],
  imports: [CommonModule, TreatmentsRoutingModule, SharedModule],
  exports: [TreatmentsCategoriesComponent],
})
export class TreatmentsModule {}
