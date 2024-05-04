import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
  },
  {
    path: ':subcategory',
    component: CategoriesComponent,
  },
  {
    path: 'info/:treatment',
    loadChildren: () =>
      import('../treatments/treatments.module').then(
        (mod) => mod.TreatmentsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
