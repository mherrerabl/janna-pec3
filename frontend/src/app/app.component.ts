import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.reducers';
import * as CartAction from './carts/actions';
import { LocalStorageService } from './shared/services/local-storage.service';
import { isLoading } from './spinner/actions/spinner.actions';
import { getLoading } from './spinner/selector/spinner.selector';
import * as UserAction from './users/actions';
import { UserDTO } from './users/models/user.dto';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Janna';
  showMenu: boolean;
  showCart: boolean;
  showLogin: boolean;
  showRegister: boolean;

  showLoading!: Observable<boolean>;

  user!: UserDTO;

  constructor(
    private store: Store<AppState>,
    private localService: LocalStorageService
  ) {
    this.showMenu = false;
    this.showCart = true;
    this.showLogin = false;
    this.showRegister = false;

    this.user = this.localService.getUser();

    if (this.user !== undefined && this.user !== null) {
      this.loadUser();
    }
    this.store.select('carts').subscribe((store) => {
      console.log(store.cart);
    });

    this.store.select('user').subscribe((store) => {
      if (
        store.user.id !== '' &&
        store.user.id !== undefined &&
        store.user.id !== null
      ) {
        setTimeout(() => {
          this.loadCart(store.user.id);
        });
      }
    });
  }

  ngOnInit(): void {}

  loadUser(): void {
    setTimeout(() => {
      this.showLoading = this.store.select(getLoading);
    });

    this.store.dispatch(UserAction.getUserLogin({ user: this.user }));
  }

  loadCart(userId: string): void {
    this.store.dispatch(isLoading({ status: true }));

    this.store.dispatch(CartAction.getCartByUserId({ userId: userId }));
  }
}
