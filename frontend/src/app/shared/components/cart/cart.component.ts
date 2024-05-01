import { Component, Input } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { ProductDTO } from '../../models/product.dto';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  @Input() dataProducts: ProductDTO[] = products;
  @Input() isOpen!: boolean;
  iconClose = faXmark;

  changeQuantity(counter: number, index: number): void {
    this.dataProducts[index].quantity = counter;
  }

  getTotalCart(): number {
    let total: number = 0;
    for (const product of this.dataProducts) {
      total += product.price * product.quantity;
    }
    return total;
  }
}

const products: ProductDTO[] = [
  {
    id: '1',
    name: 'product1',
    price: 7.5,
    quantity: 2,
    stock: 10,
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
    quantity: 1,
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
    stock: 10,
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
    quantity: 1,
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
    stock: 10,
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
    quantity: 1,
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
    stock: 10,
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
    quantity: 1,
    stock: 3,
    image: {
      jpg: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
      webp: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
      title: 'imagen',
    },
  },
];
