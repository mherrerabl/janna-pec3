import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import * as CategoriesAction from '../../../categories/actions';
import { InputDTO, OptionDTO } from '../../../shared/models/input.dto';
import { isLoading } from '../../../spinner/actions/spinner.actions';
import {
  StateUserTreatment,
  UserTreatmentClass,
} from '../../../user-treatments/models/user-treatments';
import { TypeUser, UserClass } from '../../../users/models/user';
import { UserDTO } from '../../../users/models/user.dto';
import * as AppointmentAction from '../../actions';

import { AppointmentClass, StateAppointment } from '../../models/appointment';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.scss',
})
export class AppointmentFormComponent {
  appointment: AppointmentClass;
  userTreatment: UserTreatmentClass;
  user: UserDTO;
  categoryTreatment: OptionDTO[];

  categoryForm: FormControl;
  treatmentForm: FormControl;
  dateForm: FormControl;
  timeForm: FormControl;

  date: string;
  time: string;
  category: string;
  treatment: string;

  appointmentForm: FormGroup;
  isValidForm: boolean | null;
  checkForm: boolean;

  inputsForm: InputDTO[];

  showFeedback: boolean;
  showErrorFeedback: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
    this.showFeedback = false;
    this.showErrorFeedback = false;

    this.isValidForm = null;
    this.checkForm = false;

    this.category = '';
    this.treatment = '';
    this.date = '';
    this.time = '';

    this.user = new UserClass('', '', '', '', '', null, TypeUser['user']);
    this.userTreatment = new UserTreatmentClass(
      '',
      '',
      StateUserTreatment['En proceso'],
      0,
      ''
    );
    this.appointment = new AppointmentClass(
      '',
      new Date(),
      StateAppointment['Próxima sesión'],
      this.userTreatment
    );

    this.categoryTreatment = [];

    //this.getTypeForm();

    this.categoryForm = new FormControl(this.category, [Validators.required]);

    this.treatmentForm = new FormControl(this.treatment, [Validators.required]);

    this.dateForm = new FormControl(this.date, [Validators.required]);

    this.timeForm = new FormControl(this.time, [Validators.maxLength(100)]);

    this.appointmentForm = this.formBuilder.group({
      category: this.categoryForm,
      treatment: this.treatmentForm,
      date: this.dateForm,
      time: this.timeForm,
    });

    setTimeout(() => {
      this.loadCategories();
    });
    this.store.select('user').subscribe((store) => {
      this.user = store.user;
    });

    this.store.select('categories').subscribe((store) => {
      store.categories.map((category) => {
        this.categoryTreatment = [
          ...this.categoryTreatment,
          {
            id: category.id,
            name: category.name,
          },
        ];
      });
      this.inputsForm = this.getDataInputs();
    });

    this.store.select('appointment').subscribe((store) => {
      if (this.isValidForm) {
        if (store.loaded) {
          this.resetErrors();
          this.showFeedback = true;
          this.checkForm = false;

          setTimeout(() => {
            this.showFeedback = false;
          }, 5000);
        } else {
          this.showErrorFeedback = true;
        }
      }
    });

    this.appointmentForm.get('category')?.valueChanges.subscribe((val) => {
      console.log(val);
    });

    this.inputsForm = this.getDataInputs();
  }

  ngOnInit(): void {}

  loadCategories(): void {
    this.store.dispatch(isLoading({ status: true }));
    this.store.dispatch(
      CategoriesAction.getCategoriesByDepartment({
        department: 'tratamientos',
      })
    );
  }
  /*
  getTypeForm(): void {
    if (this.id === null) {
      this.title = 'Nueva dirección';
    } else {
      this.title = 'Editar dirección';

      this.store.dispatch(isLoading({ status: true }));
      this.store.dispatch(
        AppointmentAction.getAppointmentById({
          addressId: this.id,
        })
      );
    }
  }
  */

  resetErrors(): void {
    this.showErrorFeedback = false;
    this.showFeedback = false;
    this.isValidForm = false;
  }

  sendForm(): void {
    this.checkForm = true;

    if (this.appointmentForm.invalid) {
      return;
    }

    this.checkForm = true;

    if (this.appointmentForm.invalid) {
      return;
    }

    this.isValidForm = true;

    this.getDateForm();

    this.createAppointment();
  }

  private createAppointment(): void {
    this.store.dispatch(isLoading({ status: true }));
    this.store.dispatch(
      AppointmentAction.createAppointment({
        appointment: this.appointment,
      })
    );
  }

  private getDateForm(): void {
    this.userTreatment = {
      id: '',
      user_id: this.user.id,
      state: StateUserTreatment['En proceso'],
      sessions: 1,
      treatment_id: this.appointmentForm.controls['treatmentForm'].value,
    };
    this.appointment = {
      id: '',
      date: new Date(
        `${this.appointmentForm.controls['dateForm'].value} ${this.appointmentForm.controls['timeForm'].value}`
      ),
      state: StateAppointment['Próxima sesión'],
      user_treatment: this.userTreatment,
    };
  }

  private getDataInputs(): InputDTO[] {
    return [
      {
        id: 'categoryAppointment',
        label: 'Tipo de tratamiento',
        placeholder: '',
        type: 'select',
        options: this.categoryTreatment,
        formControl: this.categoryForm,
        required: true,
        errors: [
          {
            type: 'required',
            message: 'Se requiere el tipo de tratamiento',
          },
        ],
      },
      {
        id: 'treatmentAppointment',
        label: 'Tratamiento',
        placeholder: '',
        type: 'select',
        formControl: this.treatmentForm,
        required: true,
        errors: [
          {
            type: 'required',
            message: 'Se requiere un tratamiento',
          },
        ],
      },
      {
        id: 'dateAppointment',
        label: 'Día',
        placeholder: '',
        type: 'date',
        formControl: this.dateForm,
        required: true,
        errors: [
          {
            type: 'required',
            message: 'Se requiere un día',
          },
        ],
      },
      {
        id: 'timeInfoAppointment',
        label: 'Hora',
        placeholder: '',
        type: 'select',
        formControl: this.timeForm,
        required: true,
        errors: [
          {
            type: 'required',
            message: 'Seleccione una hora',
          },
        ],
      },
    ];
  }
}
