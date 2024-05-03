import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { CategoryDTO } from '../models/category.dto';

export const getAllCategories = createAction(
  '[Categories list] Get categories list'
);
export const getAllCategoriesSuccess = createAction(
  '[Categories list] Get categories list success',
  props<{ categories: CategoryDTO[] }>()
);

export const getAllCategoriesFailure = createAction(
  '[Categories list] Get categories list fail',
  props<{ payload: HttpErrorResponse }>()
);

export const getCategoriesByDepartment = createAction(
  '[Categories list] Get categories by department',
  props<{ department: string }>()
);
export const getCategoriesByDepartmentSuccess = createAction(
  '[Categories list] Get categories by department success',
  props<{ categories: CategoryDTO[] }>()
);

export const getCategoriesByDepartmentFailure = createAction(
  '[Categories list] Get categories by department fail',
  props<{ payload: HttpErrorResponse }>()
);

export const getCategoriesBySubcategory = createAction(
  '[Categories list] Get categories by subcategory',
  props<{ categoryId: string }>()
);
export const getCategoriesBySubcategorySuccess = createAction(
  '[Categories list] Get categories by subcategory success',
  props<{ categories: CategoryDTO[] }>()
);

export const getCategoriesBySubcategoryFailure = createAction(
  '[Categories list] Get categories by subcategory fail',
  props<{ payload: HttpErrorResponse }>()
);

export const createCategory = createAction(
  '[Category form] Create new category',
  props<{ category: CategoryDTO }>()
);

export const createCategorySuccess = createAction(
  '[Category form] Create new category success',
  props<{ category: CategoryDTO }>()
);

export const createCategoryFailure = createAction(
  '[Category form] Create new category fail',
  props<{ payload: HttpErrorResponse }>()
);

export const updateCategory = createAction(
  '[Category form] Update category',
  props<{ categoryId: string; category: CategoryDTO }>()
);

export const updateCategorySuccess = createAction(
  '[Category form] Update category success',
  props<{ categoryId: string; category: CategoryDTO }>()
);

export const updateCategoryFailure = createAction(
  '[Category form] Update category fail',
  props<{ payload: HttpErrorResponse }>()
);

export const deleteCategory = createAction(
  '[Category form] Delete category',
  props<{ categoryId: string }>()
);

export const deleteCategorySuccess = createAction(
  '[Category form] Delete category success',
  props<{ categoryId: string }>()
);

export const deleteCategoryFailure = createAction(
  '[Category form] Delete category fail',
  props<{ payload: HttpErrorResponse }>()
);
