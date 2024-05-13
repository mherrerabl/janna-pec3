import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { ImageClass } from '../../../images/models/image';
import { PriceClass } from '../../models/price';
import { ProductDTO } from '../../models/product.dto';
import { ShipmentDTO } from '../../models/shipment.dto';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-cart-dropdown',
  templateUrl: './cart-dropdown.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class CartDropdownComponent {
  methodShop: ShipmentDTO;
  dataProducts: ProductDTO[];
  dropdownExpanded: boolean = false;
  shippingCostsFree: boolean = false;
  iconArrowUp = faChevronUp;
  iconArrowDown = faChevronDown;

  constructor(
    private store: Store<AppState>,
    private localService: LocalStorageService
  ) {
    this.dataProducts = [];

    this.methodShop = this.localService.getMethodShipment();

    this.store.select('carts').subscribe((store) => {
      store.cart.products_cart.map((product) => {
        this.dataProducts = [
          ...this.dataProducts,
          {
            id: product.id,
            variation_id: null,
            name: product.product?.name as string,
            price: product.product?.price as PriceClass,
            image: product.product?.image as ImageClass,
            quantity: product.quantity,
            stock: product.product?.stock as number,
          },
        ];
      });
    });
  }

  getSubtotal(): number {
    let subtotal: number = 0;

    if (this.dataProducts !== undefined && this.dataProducts.length > 0) {
      for (const product of this.dataProducts) {
        subtotal += product.price.price * product.quantity;
      }
    }

    return subtotal;
  }

  getTotal(): number {
    let shippingCosts: number = 4.95;
    let subtotal: number = this.getSubtotal();

    if (subtotal > 50) {
      this.shippingCostsFree = true;
      return subtotal;
    }

    return subtotal + shippingCosts;
  }

  getTaxShipment(): string {
    if (this.getSubtotal() > 50 || this.methodShop.method == 'shop') {
      return 'Gratis';
    }

    return '4,95 €';
  }
}
