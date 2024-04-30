import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Navigate } from '../../classes/navigate';

@Component({
  selector: 'app-menu-footer',
  templateUrl: './menu-footer.component.html',
})
export class MenuFooterComponent extends Navigate {
  @Input() isLogin: boolean = true;

  constructor(router: Router) {
    super(router);
  }
}
