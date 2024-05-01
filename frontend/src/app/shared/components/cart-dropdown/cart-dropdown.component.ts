import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import { ProductDTO } from '../../models/product.dto';

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
  @Input() dataProducts: ProductDTO[] = products;
  dropdownExpanded: boolean = false;
  shippingCostsFree: boolean = false;
  iconArrowUp = faChevronUp;
  iconArrowDown = faChevronDown;

  getSubtotal(): number {
    let subtotal: number = 0;

    for (const product of this.dataProducts) {
      subtotal += product.price;
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
}

const products: ProductDTO[] = [
  {
    id: '1',
    name: 'product1',
    price: 7.5,
    quantity: 2,
    stock: 3,
    image: {
      jpg: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
      webp: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
      title: 'imagen',
    },
  },
  {
    id: '1',
    name: 'product1',
    price: 7.5,
    quantity: 2,
    stock: 3,
    image: {
      jpg: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
      webp: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
      title: 'imagen',
    },
  },
];
