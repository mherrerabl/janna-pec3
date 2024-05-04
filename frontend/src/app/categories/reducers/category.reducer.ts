import { Action, createReducer, on } from '@ngrx/store';
import {
  createCategory,
  createCategoryFailure,
  createCategorySuccess,
  deleteCategory,
  deleteCategoryFailure,
  deleteCategorySuccess,
  getAllCategories,
  getAllCategoriesFailure,
  getAllCategoriesSuccess,
  getCategoriesByDepartment,
  getCategoriesByDepartmentFailure,
  getCategoriesByDepartmentSuccess,
  getCategoriesBySubcategory,
  getCategoriesBySubcategoryFailure,
  getCategoriesBySubcategorySuccess,
  getCategoryById,
  getCategoryByIdFailure,
  getCategoryByIdSuccess,
  updateCategory,
  updateCategoryFailure,
  updateCategorySuccess,
} from '../actions';
import { CategoryClass, Department } from '../models/category';

export interface CategoriesState {
  categories: CategoryClass[];
  category: CategoryClass;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: CategoriesState = {
  categories: new Array<CategoryClass>(),
  category: new CategoryClass('', '', Department.init, ''),
  loading: false,
  loaded: false,
  error: null,
};

const _categoriesReducer = createReducer(
  initialState,
  on(getAllCategories, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(getAllCategoriesSuccess, (state, action) => ({
    ...state,
    categories: action.categories,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(getAllCategoriesFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),

  on(getCategoryById, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(getCategoryByIdSuccess, (state, action) => ({
    ...state,
    category: action.category,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(getCategoryByIdFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),

  on(getCategoriesByDepartment, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(getCategoriesByDepartmentSuccess, (state, action) => ({
    ...state,
    categories: action.categories,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(getCategoriesByDepartmentFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),

  on(getCategoriesBySubcategory, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(getCategoriesBySubcategorySuccess, (state, action) => ({
    ...state,
    categories: action.categories,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(getCategoriesBySubcategoryFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),

  on(createCategory, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(createCategorySuccess, (state, action) => ({
    ...state,
    category: action.category,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(createCategoryFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),

  on(updateCategory, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(updateCategorySuccess, (state, action) => ({
    ...state,
    category: action.category,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(updateCategoryFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),

  on(deleteCategory, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(deleteCategorySuccess, (state, { categoryId }) => ({
    ...state,
    categories: [...state.categories.filter(({ id }) => id !== categoryId)],
    loading: false,
    loaded: true,
    error: null,
  })),
  on(deleteCategoryFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  }))
);

export function categoriesReducer(
  state: CategoriesState | undefined,
  action: Action
): CategoriesState {
  return _categoriesReducer(state, action);
}
