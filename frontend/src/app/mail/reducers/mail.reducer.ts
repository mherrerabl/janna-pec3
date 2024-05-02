import { Action, createReducer, on } from '@ngrx/store';
import { sendMail, sendMailFailure, sendMailSuccess } from '../actions';
import { MailDTO } from '../models/mail.dto.ts';

export interface MailState {
  mail: MailDTO;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: MailState = {
  mail: new MailDTO('', '', '', ''),
  loading: false,
  loaded: false,
  error: null,
};

const _mailReducer = createReducer(
  initialState,
  on(sendMail, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(sendMailSuccess, (state, action) => ({
    ...state,
    mail: action.mail,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(sendMailFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  }))
);

export function mailReducer(
  state: MailState | undefined,
  action: Action
): MailState {
  return _mailReducer(state, action);
}
