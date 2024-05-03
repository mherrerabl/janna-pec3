import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.reducers';
import { getLoading } from './spinner/selector/spinner.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  /*animations: [
    trigger('sidebarTrigger', [
      // To add a cool "enter" animation for the sidebar
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-in', style({ transform: 'translateY(0%)' })),
      ]),

      // To define animations based on trigger actions
      state('open', style({ transform: 'translateX(0%)' })),
      state('close', style({ transform: 'translateX(100%)' })),
      transition('open => close', [animate('300ms ease-in')]),
      transition('close => open', [animate('300ms ease-out')]),
    ]),
  ],*/
  animations: [
    trigger('sidebarTrigger', [
      state(
        'close',
        style({
          transform: 'translateX(100%)',
        })
      ),
      state(
        'open',
        style({
          transform: 'translateX(0)',
        })
      ),
      transition('* => *', [animate(250)]),
    ]),
  ],
})
export class AppComponent {
  title = 'Janna';
  showMenu: boolean;
  showCart: boolean;
  showLogin: boolean;
  showRegister: boolean;

  showLoading!: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.showMenu = false;
    this.showCart = false;
    this.showLogin = false;
    this.showRegister = false;
  }

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
  }
  /*
  menuState: string = 'out';
  isOpen: string = 'close';
  toggleMenu() {
    this.isOpen == 'open' ? (this.isOpen = 'close') : (this.isOpen = 'open');
    console.log(this.isOpen);
  }*/
}
