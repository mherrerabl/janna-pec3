import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileUserFormComponent } from './components/profile-user-form/profile-user-form.component';
import { ProfileUserTableComponent } from './components/profile-user-table/profile-user-table.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: ':type',
        component: ProfileUserTableComponent,
      },
      {
        path: ':type/:form',
        component: ProfileUserFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileUserRoutingModule {}
