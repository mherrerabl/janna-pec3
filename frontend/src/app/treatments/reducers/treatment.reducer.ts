import { Action, createReducer, on } from '@ngrx/store';
import {
  createTreatment,
  createTreatmentFailure,
  createTreatmentSuccess,
  deleteTreatment,
  deleteTreatmentFailure,
  deleteTreatmentSuccess,
  getAllTreatments,
  getAllTreatmentsFailure,
  getAllTreatmentsSuccess,
  getTreatmentById,
  getTreatmentByIdFailure,
  getTreatmentByIdSuccess,
  getTreatmentByUrl,
  getTreatmentByUrlFailure,
  getTreatmentByUrlSuccess,
  updateTreatment,
  updateTreatmentFailure,
  updateTreatmentSuccess,
} from '../actions';
import { TreatmentClass } from '../models/treatment';

export interface TreatmentsState {
  treatments: TreatmentClass[];
  treatment: TreatmentClass;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: TreatmentsState = {
  treatments: new Array<TreatmentClass>(),
  treatment: new TreatmentClass('', '', '', 0, 0, ''),
  loading: false,
  loaded: false,
  error: null,
};

const _treatmentsReducer = createReducer(
  initialState,
  on(getAllTreatments, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(getAllTreatmentsSuccess, (state, action) => ({
    ...state,
    treatments: action.treatments,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(getAllTreatmentsFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),

  on(getTreatmentById, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(getTreatmentByIdSuccess, (state, action) => ({
    ...state,
    treatment: action.treatment,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(getTreatmentByIdFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),

  on(getTreatmentByUrl, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(getTreatmentByUrlSuccess, (state, action) => ({
    ...state,
    treatment: action.treatment,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(getTreatmentByUrlFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),

  on(createTreatment, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(createTreatmentSuccess, (state, action) => ({
    ...state,
    treatment: action.treatment,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(createTreatmentFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),

  on(updateTreatment, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(updateTreatmentSuccess, (state, action) => ({
    ...state,
    treatment: action.treatment,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(updateTreatmentFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),

  on(deleteTreatment, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(deleteTreatmentSuccess, (state, { treatmentId }) => ({
    ...state,
    treatments: [...state.treatments.filter(({ id }) => id !== treatmentId)],
    loading: false,
    loaded: true,
    error: null,
  })),
  on(deleteTreatmentFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  }))
);

export function treatmentsReducer(
  state: TreatmentsState | undefined,
  action: Action
): TreatmentsState {
  return _treatmentsReducer(state, action);
}
