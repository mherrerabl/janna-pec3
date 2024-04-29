import { Component } from '@angular/core';
import { ProductDTO } from '../../models/product.dto';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss',
})
export class BasketComponent {
  dataProducts: ProductDTO[] = products;
  counter: number = 1;
  stock: number = 10;

  changeQuantity(counter: number, index: number): void {
    this.dataProducts[index].quantity = counter;
  }

  getTotalBasket(): number {
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
