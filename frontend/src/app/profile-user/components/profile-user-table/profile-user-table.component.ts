import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-user-table',
  templateUrl: './profile-user-table.component.html',
  styleUrl: './profile-user-table.component.scss',
})
export class ProfileUserTableComponent {
  constructor(private router: Router) {}

  getUrl(): void {
    this.router.url.split('/').pop();
  }
}
