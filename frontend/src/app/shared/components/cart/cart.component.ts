import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.reducers';
import * as CartAction from '../../../carts/actions';
import { isLoading } from '../../../spinner/actions/spinner.actions';
import { TypeUser, UserClass } from '../../../users/models/user';
import { ProductDTO } from '../../models/product.dto';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  dataProducts: ProductDTO[];
  user: UserClass;
  iconClose = faXmark;

  showCart$!: Observable<'open' | 'close'>;

  constructor(
    private modalService: ModalService,
    private store: Store<AppState>
  ) {
    this.dataProducts = [];

    this.user = new UserClass('', '', '', '', '', null, TypeUser['user']);

    this.store.select('user').subscribe((store) => {
      this.user = store.user;
    });

    this.store.select('carts').subscribe((store) => {
      if (store.cart.products_cart.length > 0) {
        this.dataProducts = [];
        for (const product of store.cart.products_cart) {
          if (product.product !== undefined) {
            this.dataProducts = [
              ...this.dataProducts,
              {
                id: product.product.id,
                variation_id: null,
                name: product.product.name,
                price: product.product.price,
                image: product.product.image,
                quantity: product.quantity,
                stock: product.product.stock,
              },
            ];
          }
        }
      }
    });
  }

  ngOnInit(): void {
    this.showCart$ = this.modalService.watchCart();
  }

  changeQuantity(counter: number, index: number): void {
    this.dataProducts[index].quantity = counter;
  }

  getTotalCart(): number {
    let total: number = 0;
    if (this.dataProducts !== null && this.dataProducts.length > 0) {
      for (const product of this.dataProducts) {
        total += product.price.price * product.quantity;
      }
    }

    return total;
  }

  removeProduct(productId: string): void {
    setTimeout(() => {
      this.store.dispatch(isLoading({ status: true }));
    });

    this.store.dispatch(
      CartAction.removeProduct({
        userId: this.user.id,
        productId: productId,
      })
    );
  }

  closeCart(): void {
    this.modalService.closeCart();
  }
}
