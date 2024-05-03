import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { TreatmentDTO } from '../models/treatment.dto';

export const getAllTreatments = createAction(
  '[Treatments list] Get treatments list'
);
export const getAllTreatmentsSuccess = createAction(
  '[Treatments list] Get treatments list success',
  props<{ treatments: TreatmentDTO[] }>()
);

export const getAllTreatmentsFailure = createAction(
  '[Treatments list] Get treatments list fail',
  props<{ payload: HttpErrorResponse }>()
);

export const createTreatment = createAction(
  '[Treatment form] Create new treatment',
  props<{ treatment: TreatmentDTO }>()
);

export const createTreatmentSuccess = createAction(
  '[Treatment form] Create new treatment success',
  props<{ treatment: TreatmentDTO }>()
);

export const createTreatmentFailure = createAction(
  '[Treatment form] Create new treatment fail',
  props<{ payload: HttpErrorResponse }>()
);

export const updateTreatment = createAction(
  '[Treatment form] Update treatment',
  props<{ treatmentId: string; treatment: TreatmentDTO }>()
);

export const updateTreatmentSuccess = createAction(
  '[Treatment form] Update treatment success',
  props<{ treatmentId: string; treatment: TreatmentDTO }>()
);

export const updateTreatmentFailure = createAction(
  '[Treatment form] Update treatment fail',
  props<{ payload: HttpErrorResponse }>()
);

export const deleteTreatment = createAction(
  '[Treatment form] Delete treatment',
  props<{ treatmentId: string }>()
);

export const deleteTreatmentSuccess = createAction(
  '[Treatment form] Delete treatment success',
  props<{ treatmentId: string }>()
);

export const deleteTreatmentFailure = createAction(
  '[Treatment form] Delete treatment fail',
  props<{ payload: HttpErrorResponse }>()
);
