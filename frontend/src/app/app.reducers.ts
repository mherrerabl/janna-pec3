import { ActionReducerMap } from '@ngrx/store';
import { MailEffects } from './mail/effects';
import * as MailReducer from './mail/reducers';
import * as SpinnerReducer from './spinner/reducer';

export interface AppState {
  mail: MailReducer.MailState;
  spinner: SpinnerReducer.SpinnerState;
}

export const appReducers: ActionReducerMap<AppState> = {
  mail: MailReducer.mailReducer,
  spinner: SpinnerReducer.spinnerReducer,
};

export const EffectsArray: any[] = [MailEffects];
