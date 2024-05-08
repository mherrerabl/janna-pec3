import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProfileUserAddressesTableComponent } from './components/addresses/profile-user-addresses-table/profile-user-addresses-table.component';
import { ProfileUserOrdersTableComponent } from './components/orders/profile-user-orders-table/profile-user-orders-table.component';
import { ProfileUserPersonalFormComponent } from './components/personal/profile-user-personal-form/profile-user-personal-form.component';
import { ProfileUserFormComponent } from './components/profile-user-form/profile-user-form.component';
import { ProfileUserTableComponent } from './components/profile-user-table/profile-user-table.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileUserRoutingModule } from './profile-user-routing.module';

@NgModule({
  declarations: [
    ProfileComponent,

    ProfileUserTableComponent,
    ProfileUserFormComponent,
    ProfileUserPersonalFormComponent,
    ProfileUserAddressesTableComponent,
    ProfileUserOrdersTableComponent,
  ],
  imports: [
    CommonModule,
    ProfileUserRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ProfileUserModule {}
