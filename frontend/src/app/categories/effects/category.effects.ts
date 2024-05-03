import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map, of } from 'rxjs';
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

  getCategoriesBySubcategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.getCategoriesBySubcategory),
      exhaustMap(({ categoryId }) =>
        this.categoryService.getCategoriesBySubcategory(categoryId).pipe(
          map((categories) => {
            this.store.dispatch(isLoading({ status: false }));
            return CategoryActions.getCategoriesBySubcategorySuccess({
              categories: categories,
            });
          }),
          catchError((error) => {
            return of(
              CategoryActions.getCategoriesBySubcategoryFailure({
                payload: error,
              })
            );
          })
        )
      )
    )
  );

  getCategoriesBySubcategoryFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CategoryActions.getCategoriesBySubcategoryFailure),
        map((error) => {
          this.store.dispatch(isLoading({ status: false }));
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );
}
