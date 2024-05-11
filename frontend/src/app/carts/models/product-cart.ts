import { ProductClass } from '../../products/models/product';

export class ProductCartClass {
  id: string;
  product_id: string;
  quantity: number;
  cart_id: string;
  products?: ProductClass;

  constructor(
    id: string,
    product_id: string,
    quantity: number,
    cart_id: string
  ) {
    this.id = id;
    this.product_id = product_id;
    this.quantity = quantity;
    this.cart_id = cart_id;
  }
}
