import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { Navigate } from '../../classes/navigate';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent extends Navigate {
  @Input() isLogin: boolean = true;
  iconClose = faXmark;

  constructor(router: Router) {
    super(router);
  }
}
