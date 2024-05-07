import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.reducers';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-menu-footer',
  templateUrl: './menu-footer.component.html',
})
export class MenuFooterComponent {
  isLogin: boolean = false;

  showRegister$!: Observable<'open' | 'close'>;
  showLogin$!: Observable<'open' | 'close'>;
  showCart$!: Observable<'open' | 'close'>;

  constructor(
    private modalService: ModalService,
    private store: Store<AppState>
  ) {
    this.showRegister$ = this.modalService.watchLogin();
    this.showLogin$ = this.modalService.watchRegister();
    this.showCart$ = this.modalService.watchCart();

    this.store.select('user').subscribe((store) => {
      if (store.user.id !== '' && store.user.id !== undefined) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }

  openCart(): void {
    this.modalService.openCart();
  }

  openLogin(): void {
    this.modalService.openLogin();
  }

  openRegister(): void {
    this.modalService.openRegister();
  }
}
