import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, finalize, map, of } from 'rxjs';
import { SharedService } from '../../shared/services/shared.service';
import { isLoading } from '../../spinner/actions/spinner.actions';
import { CategoryService } from '../services/category.service';
import * as CategoryActions from './../actions';

@Injectable()
export class CategoryEffects {
  private responseOK: boolean;
  private errorResponse: any;

  constructor(
    private actions$: Actions,
    private categoryService: CategoryService,
    private sharedService: SharedService,
    private router: Router,
    private store: Store
  ) {
    this.responseOK = false;
  }

  getCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.getAllCategories),
      exhaustMap(() =>
        this.categoryService.getCategories().pipe(
          map((categories) => {
            this.store.dispatch(isLoading({ status: false }));
            return CategoryActions.getAllCategoriesSuccess({
              categories: categories,
            });
          }),
          catchError((error) => {
            return of(
              CategoryActions.getAllCategoriesFailure({ payload: error })
            );
          })
        )
      )
    )
  );

  getCategoryById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.getCategoryById),
      exhaustMap(({ categoryId }) =>
        this.categoryService.getCategoryById(categoryId).pipe(
          map((category) => {
            this.store.dispatch(isLoading({ status: false }));
            return CategoryActions.getCategoryByIdSuccess({
              category: category,
            });
          }),
          catchError((error) => {
            return of(
              CategoryActions.getCategoryByIdFailure({ payload: error })
            );
          })
        )
      )
    )
  );

  getCategoryByIdFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CategoryActions.getCategoryByIdFailure),
        map((error) => {
          this.store.dispatch(isLoading({ status: false }));
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  getCategoriesFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CategoryActions.getAllCategoriesFailure),
        map((error) => {
          this.store.dispatch(isLoading({ status: false }));
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  getCategoriesByDepartment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.getCategoriesByDepartment),
      exhaustMap(({ department }) =>
        this.categoryService.getCategoriesByDepartment(department).pipe(
          map((categories) => {
            this.store.dispatch(isLoading({ status: false }));
            return CategoryActions.getCategoriesByDepartmentSuccess({
              categories: categories,
            });
          }),
          catchError((error) => {
            return of(
              CategoryActions.getCategoriesByDepartmentFailure({
                payload: error,
              })
            );
          })
        )
      )
    )
  );

  getCategoriesByDepartmentFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CategoryActions.getCategoriesByDepartmentFailure),
        map((error) => {
          this.store.dispatch(isLoading({ status: false }));
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  getCategoriesByParam$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.getCategoriesByParam),
      exhaustMap(({ paramUrl }) =>
        this.categoryService.getCategoriesByParam(paramUrl).pipe(
          map((categories) => {
            this.store.dispatch(isLoading({ status: false }));
            return CategoryActions.getCategoriesByParamSuccess({
              categories: categories,
            });
          }),
          catchError((error) => {
            return of(
              CategoryActions.getCategoriesByParamFailure({
                payload: error,
              })
            );
          })
        )
      )
    )
  );

  getCategoriesByParamFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CategoryActions.getCategoriesByParamFailure),
        map((error) => {
          this.store.dispatch(isLoading({ status: false }));
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  getCategoryByUrl$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.getCategoryByUrl),
      exhaustMap(({ paramUrl }) =>
        this.categoryService.getCategoryByUrl(paramUrl).pipe(
          map((category) => {
            this.store.dispatch(isLoading({ status: false }));
            return CategoryActions.getCategoryByUrlSuccess({
              category: category,
            });
          }),
          catchError((error) => {
            return of(
              CategoryActions.getCategoryByUrlFailure({
                payload: error,
              })
            );
          })
        )
      )
    )
  );

  getCategoryByUrlFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CategoryActions.getCategoryByUrlFailure),
        map((error) => {
          this.store.dispatch(isLoading({ status: false }));
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  createCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.createCategory),
      exhaustMap(({ category }) =>
        this.categoryService.createCategory(category).pipe(
          map((category) => {
            return CategoryActions.createCategorySuccess({
              category: category,
            });
          }),
          catchError((error) => {
            return of(
              CategoryActions.createCategoryFailure({ payload: error })
            );
          }),
          finalize(async () => {
            setTimeout(() => {
              this.sharedService.flashNotification(
                'categoryFeedback',
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

  createCategorySuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CategoryActions.createCategorySuccess),
        map(() => {
          this.store.dispatch(isLoading({ status: false }));
          this.responseOK = true;
        })
      ),
    { dispatch: false }
  );

  createCategoryFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CategoryActions.createCategoryFailure),
        map((error) => {
          this.store.dispatch(isLoading({ status: false }));
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  updateCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.updateCategory),
      exhaustMap(({ categoryId, category }) =>
        this.categoryService.updateCategory(categoryId, category).pipe(
          map((category) => {
            return CategoryActions.updateCategorySuccess({
              categoryId: categoryId,
              category: category,
            });
          }),
          catchError((error) => {
            return of(
              CategoryActions.updateCategoryFailure({ payload: error })
            );
          }),
          finalize(async () => {
            setTimeout(() => {
              this.sharedService.flashNotification(
                'categoryFeedback',
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

  updateCategorySuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CategoryActions.updateCategorySuccess),
        map(() => {
          this.store.dispatch(isLoading({ status: false }));
          this.responseOK = true;
        })
      ),
    { dispatch: false }
  );

  updateCategoryFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CategoryActions.updateCategoryFailure),
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
