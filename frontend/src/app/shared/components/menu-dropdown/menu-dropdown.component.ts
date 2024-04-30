import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Navigate } from '../../classes/navigate';

@Component({
  selector: 'app-menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  styleUrl: './menu-dropdown.component.scss',
})
export class MenuDropdownComponent extends Navigate {
  @Input() isLogin: boolean = true;

  constructor(router: Router) {
    super(router);
  }
}
