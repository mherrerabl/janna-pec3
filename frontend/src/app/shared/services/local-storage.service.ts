import { Injectable } from '@angular/core';
import { UserDTO } from '../../users/models/user.dto';
import { ProductDTO } from '../models/product.dto';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  cart: ProductDTO[] = [];

  constructor() {}

  getUser(): UserDTO {
    let user: UserDTO = {
      email: '',
      password: '',
    };
    if (typeof window !== 'undefined') {
      user = JSON.parse(localStorage.getItem('user') as any);
    }
    return user;
  }

  saveUser(user: UserDTO): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  removeUser(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
  }

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
