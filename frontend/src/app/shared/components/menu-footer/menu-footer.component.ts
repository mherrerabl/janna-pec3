import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-menu-footer',
  templateUrl: './menu-footer.component.html',
})
export class MenuFooterComponent {
  @Input() isLogin: boolean = true;

  constructor(private modalService: ModalService) {}

  openCart(): void {
    this.modalService.openCart();
  }
}
