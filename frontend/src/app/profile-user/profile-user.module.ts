import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProfileUserFormComponent } from './components/profile-user-form/profile-user-form.component';
import { ProfileUserTableComponent } from './components/profile-user-table/profile-user-table.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileUserRoutingModule } from './profile-user-routing.module';

@NgModule({
  declarations: [
    ProfileComponent,

    ProfileUserTableComponent,
    ProfileUserFormComponent,
  ],
  imports: [CommonModule, ProfileUserRoutingModule, SharedModule],
})
export class ProfileUserModule {}
