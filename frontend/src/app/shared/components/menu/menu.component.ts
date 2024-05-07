import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.reducers';
import * as UserAction from '../../../users/actions';
import { LocalStorageService } from '../../services/local-storage.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  isLogin: boolean = false;
  iconClose = faXmark;

  showMenu$!: Observable<'open' | 'close'>;
  showRegister$!: Observable<'open' | 'close'>;
  showLogin$!: Observable<'open' | 'close'>;
  showCart$!: Observable<'open' | 'close'>;

  constructor(
    private modalService: ModalService,
    private store: Store<AppState>,
    private localService: LocalStorageService
  ) {
    this.store.select('user').subscribe((store) => {
      if (store.user.id !== '' && store.user.id !== undefined) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }

  ngOnInit(): void {
    this.showMenu$ = this.modalService.watchMenu();
    this.showRegister$ = this.modalService.watchLogin();
    this.showLogin$ = this.modalService.watchRegister();
    this.showCart$ = this.modalService.watchCart();
  }

  closeMenu(): void {
    this.modalService.closeMenu();
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

  logout(): void {
    this.localService.removeUser();

    this.store.dispatch(UserAction.logout());
  }
}
