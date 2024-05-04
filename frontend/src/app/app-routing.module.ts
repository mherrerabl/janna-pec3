import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((mod) => mod.HomeModule),
  },

  {
    path: 'tratamientos',
    loadChildren: () =>
      import('./categories/categories.module').then(
        (mod) => mod.CategoriesModule
      ),
  },
  {
    path: 'tienda',
    loadChildren: () =>
      import('./categories/categories.module').then(
        (mod) => mod.CategoriesModule
      ),
  },
  /*{
    path: ':department/:tratamiento',
    loadChildren: () =>
      import('./treatments/treatments.module').then(
        (mod) => mod.TreatmentsModule
      ),
  },
  {
    path: ':department/:category/:tratamiento',
    loadChildren: () =>
      import('./treatments/treatments.module').then(
        (mod) => mod.TreatmentsModule
      ),
  },
  {
    path: 'tienda/:productos',
    loadChildren: () =>
      import('./home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'tienda/:category/:productos',
    loadChildren: () =>
      import('./home/home.module').then((mod) => mod.HomeModule),
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
