import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { TreatmentDetailComponent } from './components/treatment-detail/treatment-detail.component';
import { TreatmentsRoutingModule } from './treatments-routing.module';

@NgModule({
  declarations: [TreatmentDetailComponent],
  imports: [CommonModule, TreatmentsRoutingModule, SharedModule],
  exports: [TreatmentDetailComponent],
})
export class TreatmentsModule {}
