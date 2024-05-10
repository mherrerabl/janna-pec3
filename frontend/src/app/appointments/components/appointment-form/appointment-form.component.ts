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
import * as AppointmentAction from '../../actions';

import { addMinutes } from 'date-fns';
import { CategoryClass, Department } from '../../../categories/models/category';
import { AppointmentClass, StateAppointment } from '../../models/appointment';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.scss',
})
export class AppointmentFormComponent {
  appointment: AppointmentClass;
  appointments: AppointmentClass[];
  userTreatment: UserTreatmentClass;
  user: UserClass;
  categories: CategoryClass[];
  typeTreatmentOptions: OptionDTO[];
  treatmentOptions: OptionDTO[];
  dateSelected: boolean;

  typeTreatmentForm: FormControl;
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

  treatmentRequired: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
    //Initialize
    this.showFeedback = false;
    this.showErrorFeedback = false;

    this.isValidForm = null;
    this.checkForm = false;

    this.category = '';
    this.treatment = '';
    this.date = '';
    this.time = '';

    this.treatmentRequired = true;

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
    this.appointments = new Array<AppointmentClass>();

    this.categories = new Array<CategoryClass>();
    this.typeTreatmentOptions = [];
    this.treatmentOptions = [];
    this.dateSelected = false;
    //this.getTypeForm();

    //Form
    this.typeTreatmentForm = new FormControl(this.category, [
      Validators.required,
    ]);

    this.treatmentForm = new FormControl(this.treatment, [Validators.required]);

    this.dateForm = new FormControl(this.date, [Validators.required]);

    this.timeForm = new FormControl(this.time, [Validators.maxLength(100)]);

    this.appointmentForm = this.formBuilder.group({
      typeTreatment: this.typeTreatmentForm,
      treatment: this.treatmentForm,
      date: this.dateForm,
      time: this.timeForm,
    });

    //LoadCategories
    setTimeout(() => {
      this.loadCategories();
    });

    //Subscriptions store
    this.store.select('user').subscribe((store) => {
      this.user = store.user;
    });

    this.store.select('categories').subscribe((store) => {
      this.categories = store.categories.filter(
        ({ department }) => department === Department['tratamientos']
      );

      this.changeTypeTreatmentOptions();
    });

    this.store.select('appointment').subscribe((store) => {
      this.appointments = store.appointments;
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

    this.appointmentForm.get('typeTreatment')?.valueChanges.subscribe((id) => {
      this.changeTreatmentOptions(id);
    });

    this.appointmentForm.get('date')?.valueChanges.subscribe((dateForm) => {
      let appointmentsDay = this.appointments.filter(
        ({ date }) =>
          new Date(date).toLocaleDateString() ==
          new Date(dateForm).toLocaleDateString()
      );

      hours.forEach((option) => {
        let arrayInterval = option.name.split('-');
        let startHour: string = arrayInterval[0];
        let endHour = arrayInterval[1];
        console.log(endHour);

        appointmentsDay.forEach((appointment) => {
          let startAppointment: string = new Date(
            appointment.date
          ).toLocaleTimeString();
          let endAppointment: string = '';

          if (appointment.treatment) {
            endAppointment = addMinutes(
              new Date(appointment.date),
              appointment.treatment?.duration
            ).toLocaleTimeString();
          }
          let check: boolean =
            (Date.parse('1/1/2000 ' + startAppointment) >
              Date.parse('1/1/2000 ' + startHour + ':00') &&
              Date.parse('1/1/2000 ' + startAppointment) <
                Date.parse('1/1/2000 ' + endHour + ':00')) ||
            (Date.parse('1/1/2000 ' + startHour) >
              Date.parse('1/1/2000 ' + startAppointment + ':00') &&
              Date.parse('1/1/2000 ' + startHour) <
                Date.parse('1/1/2000 ' + endAppointment + ':00'));

          if (option.disabled !== true) {
            option.disabled = check;
          }
        });
      });
      console.log(hours);

      this.dateSelected = true;
      this.inputsForm = this.getDataInputs();
    });

    this.inputsForm = this.getDataInputs();
  }

  ngOnInit(): void {}

  loadCategories(): void {
    this.store.dispatch(isLoading({ status: true }));
    this.store.dispatch(CategoriesAction.getCategories());
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

  changeTypeTreatmentOptions() {
    this.typeTreatmentOptions = [];
    let typeTreatment = this.categories.filter(
      ({ category_id }) => category_id === null
    );
    typeTreatment.map((category) => {
      this.typeTreatmentOptions = [
        ...this.typeTreatmentOptions,
        {
          id: category.id,
          name: category.name,
        },
      ];
    });
    this.inputsForm = this.getDataInputs();
  }

  changeTreatmentOptions(id: string): void {
    this.treatmentOptions = [];
    let treatments = this.categories.filter(
      ({ category_id }) => category_id == id
    );

    treatments.map((treatment) => {
      this.treatmentOptions = [
        ...this.treatmentOptions,
        {
          id: treatment.id,
          name: treatment.name,
        },
      ];
    });
    this.checkTreatmentValue();
    this.inputsForm = this.getDataInputs();
  }

  checkTreatmentValue(): void {
    this.treatmentRequired = true;
    let typeTreatmentsIds = ['4', '5', '6', '7'];
    typeTreatmentsIds.map((value) => {
      if (value == this.appointmentForm.controls['typeTreatment'].value) {
        this.treatmentRequired = false;
      }
    });
  }

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
        options: this.typeTreatmentOptions,
        formControl: this.typeTreatmentForm,
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
        options: this.treatmentOptions,
        formControl: this.treatmentForm,
        required: this.treatmentRequired,
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
        placeholder: 'dd/mm/aaaa',
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
        options: hours,
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

const hours: OptionDTO[] = [
  {
    id: '09:00',
    name: '09:00-09:30',
  },
  {
    id: '09:30',
    name: '09:30-10:00',
  },
  {
    id: '10:00',
    name: '10:00-10:30',
  },
  {
    id: '10:30',
    name: '10:30-11:00',
  },
  {
    id: '11:00',
    name: '11:00-11:30',
  },
  {
    id: '11:30',
    name: '11:30-12:00',
  },
  {
    id: '12:00',
    name: '12:00-12:30',
  },
  {
    id: '12:00',
    name: '12:00-13:00',
  },
  {
    id: '12:00',
    name: '12:00-15:30',
  },
  {
    id: '12:00',
    name: '12:00-16:00',
  },
  {
    id: '16:00',
    name: '16:00-16:30',
  },
  {
    id: '16:30',
    name: '16:30-17:00',
  },
  {
    id: '16:30',
    name: '16:30-17:30',
  },
  {
    id: '17:30',
    name: '17:30-18:00',
  },

  {
    id: '18:00',
    name: '18:00-18:30',
  },
  {
    id: '18:30',
    name: '18:30-19:00',
  },
];
