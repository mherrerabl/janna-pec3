import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileUserAddressesFormComponent } from './components/addresses/profile-user-addresses-form/profile-user-addresses-form.component';
import { ProfileUserAddressesTableComponent } from './components/addresses/profile-user-addresses-table/profile-user-addresses-table.component';
import { ProfileUserAppointmentsTableComponent } from './components/appointments/profile-user-appointments-table/profile-user-appointments-table.component';
import { ProfileUserOrdersTableComponent } from './components/orders/profile-user-orders-table/profile-user-orders-table.component';
import { ProfileUserPersonalFormComponent } from './components/personal/profile-user-personal-form/profile-user-personal-form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileUserTreatmentsTableComponent } from './components/treatments/profile-user-treatments-table/profile-user-treatments-table.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'personal',
        component: ProfileUserPersonalFormComponent,
      },
      {
        path: 'direcciones',
        children: [
          {
            path: '',
            component: ProfileUserAddressesTableComponent,
          },
          {
            path: 'nuevo',
            component: ProfileUserAddressesFormComponent,
          },
          {
            path: 'editar/:id',
            component: ProfileUserAddressesFormComponent,
          },
        ],
      },
      {
        path: 'pedidos',
        component: ProfileUserOrdersTableComponent,
        children: [
          {
            path: 'nuevo',
            component: ProfileUserOrdersTableComponent,
          },
          {
            path: 'editar/:id',
            component: ProfileUserOrdersTableComponent,
          },
        ],
      },
      {
        path: 'citas',
        component: ProfileUserAppointmentsTableComponent,
        children: [
          {
            path: 'nuevo',
            component: ProfileUserAppointmentsTableComponent,
          },
          {
            path: 'editar/:id',
            component: ProfileUserAppointmentsTableComponent,
          },
        ],
      },

      {
        path: 'tratamientos',
        component: ProfileUserTreatmentsTableComponent,
        children: [
          {
            path: 'nuevo',
            component: ProfileUserTreatmentsTableComponent,
          },
          {
            path: 'editar/:id',
            component: ProfileUserTreatmentsTableComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileUserRoutingModule {}
