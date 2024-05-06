import { Injectable } from '@angular/core';
import { ProductDTO } from '../models/product.dto';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  cart: ProductDTO[] = [];

  getCart(): ProductDTO[] {
    this.loadCart();
    return this.cart;
  }
  addProductToCart(product: ProductDTO): void {
    this.cart = this.cart.filter(
      (storageProduct) => product.product_id !== storageProduct.product_id
    );

    this.cart.push(product);

    this.saveCart();
  }

  saveCart(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  loadCart(): void {
    if (typeof window !== 'undefined') {
      this.cart = JSON.parse(localStorage.getItem('cart') as any);
    }
  }
}
