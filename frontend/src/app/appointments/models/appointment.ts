import { UserTreatmentClass } from '../../user-treatments/models/user-treatments';

export enum StateAppointment {
  'Pendiente' = 'Pendiente',
  'Próxima sesión' = 'Próxima sesión',
  'Realizada' = 'Realizada',
  'No realizada' = 'No realizada',
  'Cancelada' = 'Cancelada',
}

export class AppointmentClass {
  id: string;
  date: Date;
  state: StateAppointment;
  user_treatment_id: string;
  user_treatment?: UserTreatmentClass;
  user?: {
    id: string;
    name: string;
    surname: string;
  };

  constructor(
    id: string,
    date: Date,
    state: StateAppointment,
    user_treatment_id: string
  ) {
    this.id = id;
    this.date = date;
    this.state = state;
    this.user_treatment_id = user_treatment_id;
  }
}
