import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.reducers';
import { LocalStorageService } from './shared/services/local-storage.service';
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

    this.store.select('user').subscribe((store) => {
      if (store.user.id === '' || store.user.id === undefined) {
        this.user = this.localService.getUser();
      }
    });
  }

  ngOnInit(): void {
    if (this.user !== undefined && this.user !== null) {
      this.loadUser();
    }
  }

  loadUser(): void {
    setTimeout(() => {
      this.showLoading = this.store.select(getLoading);
    });

    this.store.dispatch(UserAction.getUserLogin({ user: this.user }));
  }
}
