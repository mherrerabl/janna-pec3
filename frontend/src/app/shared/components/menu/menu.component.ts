import { Component, Input, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { Observable } from 'rxjs';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  @Input() isLogin: boolean = true;
  iconClose = faXmark;

  showMenu$!: Observable<'open' | 'close'>;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.showMenu$ = this.modalService.watchMenu();
  }

  closeMenu(): void {
    this.modalService.closeMenu();
  }

  openCart(): void {
    this.modalService.openCart();
  }
}
