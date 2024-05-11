import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, finalize, map, of } from 'rxjs';
import { SharedService } from '../../shared/services/shared.service';
import { isLoading } from '../../spinner/actions/spinner.actions';
import * as CartActions from '../actions';
import { CartService } from '../services/cart.service';

@Injectable()
export class CartEffects {
  private responseOK: boolean;
  private errorResponse: any;

  constructor(
    private actions$: Actions,
    private cartService: CartService,
    private sharedService: SharedService,
    private store: Store
  ) {
    this.responseOK = false;
  }

  getCarts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.getCarts),
      exhaustMap(() =>
        this.cartService.getCarts().pipe(
          map((carts) => {
            this.store.dispatch(isLoading({ status: false }));
            return CartActions.getCartsSuccess({
              carts: carts,
            });
          }),
          catchError((error) => {
            return of(CartActions.getCartsFailure({ payload: error }));
          })
        )
      )
    )
  );
  getCartsFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CartActions.getCartsFailure),
        map((error) => {
          this.store.dispatch(isLoading({ status: false }));
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );
  /*
  getCartById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.getCartById),
      exhaustMap(({ cartId }) =>
        this.cartService.getCartById(cartId).pipe(
          map((cart) => {
            this.store.dispatch(isLoading({ status: false }));
            return CartActions.getCartByIdSuccess({
              cart: cart,
            });
          }),
          catchError((error) => {
            return of(CartActions.getCartByIdFailure({ payload: error }));
          })
        )
      )
    )
  );

  getCartByIdFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CartActions.getCartByIdFailure),
        map((error) => {
          this.store.dispatch(isLoading({ status: false }));
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );
*/
  getCartByUserId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.getCartByUserId),
      exhaustMap(({ userId }) =>
        this.cartService.getCartByUserId(userId).pipe(
          map((cart) => {
            this.store.dispatch(isLoading({ status: false }));
            return CartActions.getCartByUserIdSuccess({
              cart: cart,
            });
          }),
          catchError((error) => {
            return of(CartActions.getCartByUserIdFailure({ payload: error }));
          })
        )
      )
    )
  );

  getCartByUserIdFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CartActions.getCartByUserIdFailure),
        map((error) => {
          this.store.dispatch(isLoading({ status: false }));
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  createCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.createCart),
      exhaustMap(({ cart }) =>
        this.cartService.createCart(cart).pipe(
          map((cart) => {
            return CartActions.createCartSuccess({
              cart: cart,
            });
          }),
          catchError((error) => {
            return of(CartActions.createCartFailure({ payload: error }));
          }),
          finalize(async () => {
            setTimeout(() => {
              this.sharedService.notification(
                'cartFeedback',
                this.responseOK,
                this.errorResponse,
                'Se ha creado una nueva dirección.'
              );
            }, 100);
          })
        )
      )
    )
  );

  createCartSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CartActions.createCartSuccess),
        map(() => {
          this.store.dispatch(isLoading({ status: false }));
          this.responseOK = true;
        })
      ),
    { dispatch: false }
  );

  createCartFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CartActions.createCartFailure),
        map((error) => {
          this.store.dispatch(isLoading({ status: false }));
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  updateCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.updateCart),
      exhaustMap(({ cartId, cart }) =>
        this.cartService.updateCart(cartId, cart).pipe(
          map((cart) => {
            return CartActions.updateCartSuccess({
              cart: cart,
            });
          }),
          catchError((error) => {
            return of(CartActions.updateCartFailure({ payload: error }));
          }),
          finalize(async () => {
            setTimeout(() => {
              this.sharedService.notification(
                'cartFeedback',
                this.responseOK,
                this.errorResponse,
                'Se ha actualizado la dirección.'
              );
            }, 100);
          })
        )
      )
    )
  );

  updateCartSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CartActions.updateCartSuccess),
        map(() => {
          this.store.dispatch(isLoading({ status: false }));
          this.responseOK = true;
        })
      ),
    { dispatch: false }
  );

  updateCartFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CartActions.updateCartFailure),
        map((error) => {
          this.store.dispatch(isLoading({ status: false }));
          this.responseOK = false;
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );

  deleteCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.deleteCart),
      exhaustMap(({ cartId }) =>
        this.cartService.deleteCart(cartId).pipe(
          map(() => {
            this.store.dispatch(isLoading({ status: false }));
            return CartActions.deleteCartSuccess({
              cartId: cartId,
            });
          }),
          catchError((error) => {
            return of(CartActions.deleteCartFailure({ payload: error }));
          })
        )
      )
    )
  );

  deleteCartFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CartActions.deleteCartFailure),
        map((error) => {
          this.store.dispatch(isLoading({ status: false }));
          this.errorResponse = error.payload.error;
          this.sharedService.errorLog(error.payload.error);
        })
      ),
    { dispatch: false }
  );
}
