import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreatmentDetailComponent } from './components/treatment-detail/treatment-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TreatmentDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreatmentsRoutingModule {}
