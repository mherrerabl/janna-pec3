import { Action, createReducer, on } from '@ngrx/store';
import {
  addProduct,
  addProductFailure,
  addProductSuccess,
  createCart,
  createCartFailure,
  createCartSuccess,
  deleteCart,
  deleteCartFailure,
  deleteCartSuccess,
  getCartById,
  getCartByIdFailure,
  getCartByIdSuccess,
  getCartByUserId,
  getCartByUserIdFailure,
  getCartByUserIdSuccess,
  getCarts,
  getCartsFailure,
  getCartsSuccess,
  removeProduct,
  removeProductFailure,
  removeProductSuccess,
  updateCart,
  updateCartFailure,
  updateCartSuccess,
} from '../actions';
import { CartClass } from '../models/cart';
import { ProductCartClass } from '../models/product-cart';

export interface CartsState {
  carts: CartClass[];
  cart: CartClass;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: CartsState = {
  carts: new Array<CartClass>(),
  cart: new CartClass('', '', 0, new Array<ProductCartClass>()),
  loading: false,
  loaded: false,
  error: null,
};

const _cartsReducer = createReducer(
  initialState,
  on(getCarts, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(getCartsSuccess, (state, action) => ({
    ...state,
    carts: action.carts,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(getCartsFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),

  on(getCartById, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(getCartByIdSuccess, (state, action) => ({
    ...state,
    cart: action.cart,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(getCartByIdFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),

  on(getCartByUserId, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(getCartByUserIdSuccess, (state, action) => ({
    ...state,
    cart: action.cart,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(getCartByUserIdFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),
  on(addProduct, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(addProductSuccess, (state, action) => ({
    ...state,
    cart: action.cart,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(addProductFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),

  on(removeProduct, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(removeProductSuccess, (state, action) => ({
    ...state,
    cart: action.cart,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(removeProductFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),

  on(createCart, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(createCartSuccess, (state, action) => ({
    ...state,
    cart: action.cart,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(createCartFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),

  on(updateCart, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(updateCartSuccess, (state, action) => ({
    ...state,
    cart: action.cart,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(updateCartFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),

  on(deleteCart, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(deleteCartSuccess, (state, { cartId }) => ({
    ...state,
    carts: [...state.carts.filter(({ id }) => id !== cartId)],
    loading: false,
    loaded: true,
    error: null,
  })),
  on(deleteCartFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  }))
);

export function cartsReducer(
  state: CartsState | undefined,
  action: Action
): CartsState {
  return _cartsReducer(state, action);
}
