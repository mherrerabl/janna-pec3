export class ProductOrderClass {
  id: string;
  state: boolean;
  product_id: string;
  price_id: string;
  order_id: string;

  constructor(
    id: string,
    state: boolean,
    product_id: string,
    price_id: string,
    order_id: string
  ) {
    this.id = id;
    this.state = state;
    this.product_id = product_id;
    this.price_id = price_id;
    this.order_id = order_id;
  }
}
