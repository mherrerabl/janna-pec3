import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { MailDTO } from '../models/mail.dto.ts';

export const sendMail = createAction(
  '[Contact mail] Send mail',
  props<{ mail: MailDTO }>()
);
export const sendMailSuccess = createAction(
  '[Contact mail] Send mail Success',
  props<{ mail: MailDTO }>()
);

export const sendMailFailure = createAction(
  '[Contact mail] Send mail Failure',
  props<{ payload: HttpErrorResponse }>()
);
