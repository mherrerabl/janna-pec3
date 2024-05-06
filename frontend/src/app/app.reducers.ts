import { ActionReducerMap } from '@ngrx/store';
import { CategoryEffects } from './categories/effects';
import * as CategoryReducer from './categories/reducers';
import { ImageEffects } from './images/effects';
import * as ImageReducer from './images/reducers';
import { MailEffects } from './mail/effects';
import * as MailReducer from './mail/reducers';
import { ProductEffects } from './products/effects';
import * as ProductReducer from './products/reducers';
import * as SpinnerReducer from './spinner/reducer';
import { TreatmentEffects } from './treatments/effects';
import * as TreatmentReducer from './treatments/reducers';

export interface AppState {
  mail: MailReducer.MailState;
  images: ImageReducer.ImagesState;
  categories: CategoryReducer.CategoriesState;
  treatments: TreatmentReducer.TreatmentsState;
  products: ProductReducer.ProductsState;
  spinner: SpinnerReducer.SpinnerState;
}

export const appReducers: ActionReducerMap<AppState> = {
  mail: MailReducer.mailReducer,
  images: ImageReducer.imagesReducer,
  categories: CategoryReducer.categoriesReducer,
  treatments: TreatmentReducer.treatmentsReducer,
  products: ProductReducer.productsReducer,
  spinner: SpinnerReducer.spinnerReducer,
};

export const EffectsArray: any[] = [
  MailEffects,
  ImageEffects,
  CategoryEffects,
  TreatmentEffects,
  ProductEffects,
];