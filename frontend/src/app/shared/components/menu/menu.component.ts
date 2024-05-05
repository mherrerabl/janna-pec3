import { Component, Input } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  @Input() isLogin: boolean = true;
  iconClose = faXmark;
}
