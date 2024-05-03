import { ActionReducerMap } from '@ngrx/store';
import { CategoryEffects } from './categories/effects';
import * as CategoryReducer from './categories/reducers';
import { MailEffects } from './mail/effects';
import * as MailReducer from './mail/reducers';
import * as SpinnerReducer from './spinner/reducer';

export interface AppState {
  mail: MailReducer.MailState;
  categories: CategoryReducer.CategoriesState;
  spinner: SpinnerReducer.SpinnerState;
}

export const appReducers: ActionReducerMap<AppState> = {
  mail: MailReducer.mailReducer,
  categories: CategoryReducer.categoriesReducer,
  spinner: SpinnerReducer.spinnerReducer,
};

export const EffectsArray: any[] = [MailEffects, CategoryEffects];
