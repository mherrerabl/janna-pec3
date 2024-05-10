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
      import('./treatments/treatments.module').then(
        (mod) => mod.TreatmentsModule
      ),
  },
  {
    path: 'tienda',
    loadChildren: () =>
      import('./products/products.module').then((mod) => mod.ProductsModule),
  },
  {
    path: 'agenda',
    loadChildren: () =>
      import('./appointments/appointments.module').then(
        (mod) => mod.AppointmentsModule
      ),
  },
  {
    path: 'perfil',
    loadChildren: () =>
      import('./profile-user/profile-user.module').then(
        (mod) => mod.ProfileUserModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./profile-admin/profile-admin.module').then(
        (mod) => mod.ProfileAdminModule
      ),
  },
  /*{
    path: 'tratamientos/:category',
    loadChildren: () =>
      import('./categories/categories.module').then(
        (mod) => mod.CategoriesModule
      ),
  },
  {
    path: 'tratamientos/info/:treatment',
    loadChildren: () =>
      import('./treatments/treatments.module').then(
        (mod) => mod.TreatmentsModule
      ),
  },
  {
    path: 'tratamientos/:category/info/:treatment',
    loadChildren: () =>
      import('./treatments/treatments.module').then(
        (mod) => mod.TreatmentsModule
      ),
  },
  {
    path: 'tienda',
    loadChildren: () =>
      import('./categories/categories.module').then(
        (mod) => mod.CategoriesModule
      ),
  },
  {
    path: 'tienda/ofertas',
    loadChildren: () =>
      import('./products/products.module').then((mod) => mod.ProductsModule),
  },
  {
    path: 'tienda/tendencias',
    loadChildren: () =>
      import('./products/products.module').then((mod) => mod.ProductsModule),
  },
  {
    path: 'tienda/:category/producto/:id',
    loadChildren: () =>
      import('./products/products.module').then((mod) => mod.ProductsModule),
  },
 
  {
    path: 'tienda/:category',
    loadChildren: () =>
      import('./categories/categories.module').then(
        (mod) => mod.CategoriesModule
      ),
  },
  /*{
    /*path: ':department/:category/:tratamiento',
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
