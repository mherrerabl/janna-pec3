import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileUserAddressesTableComponent } from './components/addresses/profile-user-addresses-table/profile-user-addresses-table.component';
import { ProfileUserOrdersTableComponent } from './components/orders/profile-user-orders-table/profile-user-orders-table.component';
import { ProfileUserPersonalFormComponent } from './components/personal/profile-user-personal-form/profile-user-personal-form.component';
import { ProfileComponent } from './components/profile/profile.component';

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
        component: ProfileUserAddressesTableComponent,
        children: [
          {
            path: ':form',
            component: ProfileUserAddressesTableComponent,
          },
        ],
      },
      {
        path: 'pedidos',
        component: ProfileUserOrdersTableComponent,
        children: [
          {
            path: ':form',
            component: ProfileUserOrdersTableComponent,
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
