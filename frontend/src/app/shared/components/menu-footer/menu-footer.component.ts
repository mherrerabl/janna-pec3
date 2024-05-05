import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-footer',
  templateUrl: './menu-footer.component.html',
})
export class MenuFooterComponent {
  @Input() isLogin: boolean = false;
}
