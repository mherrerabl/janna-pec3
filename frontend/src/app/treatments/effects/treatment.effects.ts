import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, finalize, map, of } from 'rxjs';
import { SharedService } from '../../shared/services/shared.service';
import { isLoading } from '../../spinner/actions/spinner.actions';
import { TreatmentService } from '../services/treatment.service';
import * as TreatmentActions from './../actions';

@Injectable()
export class TreatmentEffects {
  private responseOK: boolean;
  private errorResponse: any;

  constructor(
    private actions$: Actions,
    private treatmentService: TreatmentService,
    private sharedService: SharedService,
    private router: Router,
    private store: Store
  ) {
    this.responseOK = false;
  }

  getTreatments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TreatmentActions.getAllTreatments),
      exhaustMap(() =>
        this.treatmentService.getTreatments().pipe(
          map((treatments) => {
            this.store.dispatch(isLoading({ status: false }));
            return TreatmentActions.getAllTreatmentsSuccess({
              treatments: treatments,
            });
          }),
          catchError((error) => {
            return of(
              TreatmentActions.getAllTreatmentsFailure({ payload: error })
            );
          })
        )
      )
    )
  );

  getTreatmentsFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TreatmentActions.getAllTreatmentsFailure),
        map((error) => {
          this.store.dispatch(isLoading({ status: false }));
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  getTreatmentById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TreatmentActions.getTreatmentById),
      exhaustMap(({ treatmentId }) =>
        this.treatmentService.getTreatmentById(treatmentId).pipe(
          map((treatment) => {
            this.store.dispatch(isLoading({ status: false }));
            return TreatmentActions.getTreatmentByIdSuccess({
              treatment: treatment,
            });
          }),
          catchError((error) => {
            return of(
              TreatmentActions.getTreatmentByIdFailure({ payload: error })
            );
          })
        )
      )
    )
  );

  getTreatmentByIdFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TreatmentActions.getTreatmentByIdFailure),
        map((error) => {
          this.store.dispatch(isLoading({ status: false }));
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  getTreatmentByUrl$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TreatmentActions.getTreatmentByUrl),
      exhaustMap(({ paramUrl }) =>
        this.treatmentService.getTreatmentByUrl(paramUrl).pipe(
          map((treatment) => {
            console.log(paramUrl);

            this.store.dispatch(isLoading({ status: false }));
            return TreatmentActions.getTreatmentByUrlSuccess({
              treatment: treatment,
            });
          }),
          catchError((error) => {
            return of(
              TreatmentActions.getTreatmentByUrlFailure({ payload: error })
            );
          })
        )
      )
    )
  );

  getTreatmentByUrlFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TreatmentActions.getTreatmentByUrlFailure),
        map((error) => {
          this.store.dispatch(isLoading({ status: false }));
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );
  createTreatment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TreatmentActions.createTreatment),
      exhaustMap(({ treatment }) =>
        this.treatmentService.createTreatment(treatment).pipe(
          map((treatment) => {
            return TreatmentActions.createTreatmentSuccess({
              treatment: treatment,
            });
          }),
          catchError((error) => {
            return of(
              TreatmentActions.createTreatmentFailure({ payload: error })
            );
          }),
          finalize(async () => {
            setTimeout(() => {
              this.sharedService.flashNotification(
                'treatmentFeedback',
                this.responseOK,
                this.errorResponse,
                'Se ha creado una nueva categoría.'
              );
            }, 100);
          })
        )
      )
    )
  );

  createTreatmentSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TreatmentActions.createTreatmentSuccess),
        map(() => {
          this.store.dispatch(isLoading({ status: false }));
          this.responseOK = true;
        })
      ),
    { dispatch: false }
  );

  createTreatmentFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TreatmentActions.createTreatmentFailure),
        map((error) => {
          this.store.dispatch(isLoading({ status: false }));
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  updateTreatment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TreatmentActions.updateTreatment),
      exhaustMap(({ treatmentId, treatment }) =>
        this.treatmentService.updateTreatment(treatmentId, treatment).pipe(
          map((treatment) => {
            return TreatmentActions.updateTreatmentSuccess({
              treatmentId: treatmentId,
              treatment: treatment,
            });
          }),
          catchError((error) => {
            return of(
              TreatmentActions.updateTreatmentFailure({ payload: error })
            );
          }),
          finalize(async () => {
            setTimeout(() => {
              this.sharedService.flashNotification(
                'treatmentFeedback',
                this.responseOK,
                this.errorResponse,
                'Se ha actualizado la categoría.'
              );
            }, 100);
          })
        )
      )
    )
  );

  updateTreatmentSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TreatmentActions.updateTreatmentSuccess),
        map(() => {
          this.store.dispatch(isLoading({ status: false }));
          this.responseOK = true;
        })
      ),
    { dispatch: false }
  );

  updateTreatmentFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TreatmentActions.updateTreatmentFailure),
        map((error) => {
          this.store.dispatch(isLoading({ status: false }));
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );
}
