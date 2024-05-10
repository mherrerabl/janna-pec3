import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setDefaultOptions } from 'date-fns';
import { es } from 'date-fns/locale';
import { AppState } from '../../../app.reducers';
import { ModalService } from '../../../shared/services/modal.service';
import { TypeUser, UserClass } from '../../../users/models/user';
setDefaultOptions({ locale: es });

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
})
export class ScheduleComponent {
  showCalendar: boolean;
  showForm: boolean;
  user: UserClass;

  constructor(
    private store: Store<AppState>,
    private modalService: ModalService
  ) {
    this.showCalendar = false;
    this.showForm = false;
    this.user = new UserClass('', '', '', '', '', null, TypeUser['user']);

    this.store.select('user').subscribe((store) => {
      this.user = store.user;
    });
  }

  openLogin(): void {
    this.modalService.openLogin();
  }

  openRegister(): void {
    this.modalService.openRegister();
  }
}
