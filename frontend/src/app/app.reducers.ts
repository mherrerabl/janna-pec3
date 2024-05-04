import { ActionReducerMap } from '@ngrx/store';
import { ImageEffects } from './images/effects';
import * as ImageReducer from './images/reducers';

import { CategoryEffects } from './categories/effects';
import * as CategoryReducer from './categories/reducers';
import { MailEffects } from './mail/effects';
import * as MailReducer from './mail/reducers';
import * as SpinnerReducer from './spinner/reducer';

export interface AppState {
  mail: MailReducer.MailState;
  images: ImageReducer.ImagesState;
  categories: CategoryReducer.CategoriesState;
  spinner: SpinnerReducer.SpinnerState;
}

export const appReducers: ActionReducerMap<AppState> = {
  mail: MailReducer.mailReducer,
  images: ImageReducer.imagesReducer,
  categories: CategoryReducer.categoriesReducer,
  spinner: SpinnerReducer.spinnerReducer,
};

export const EffectsArray: any[] = [MailEffects, ImageEffects, CategoryEffects];
