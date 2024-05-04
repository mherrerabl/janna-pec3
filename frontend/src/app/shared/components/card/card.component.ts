import { Component, Input } from '@angular/core';
import { BadgeDTO } from '../../models/badge.dto';
import { CardDTO } from '../../models/card.dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() dataCard!: CardDTO;
  indexTextBadge: number = -1;
  indexColorBadge: number = -1;

  dataTextBadge!: BadgeDTO;
  dataColorBadge!: BadgeDTO;

  badgeTrend: BadgeDTO = {
    id: '',
    name: 'Trend',
    textSize: 'text-s',
    isButtonText: false,
    isButtonColor: false,
  };

  badgeNew: BadgeDTO = {
    id: '',
    name: 'Nuevo',
    textSize: 'text-s',
    isButtonText: false,
    isButtonColor: false,
  };

  badgeProm1: BadgeDTO = {
    id: '',
    name: '2a 50%',
    textSize: 'text-s',
    isButtonText: false,
    isButtonColor: false,
  };

  badgeProm2: BadgeDTO = {
    id: '',
    name: '3x2',
    textSize: 'text-s',
    isButtonText: false,
    isButtonColor: false,
  };
  dataSelectedBadge(badge: BadgeDTO, type: string): void {
    if (type === 'textBadge') {
      this.dataTextBadge = badge;
    }

    if (type === 'colorBadge') {
      this.dataColorBadge = badge;
    }
  }

  selectedTextBadge(i: number): void {
    if (this.indexTextBadge === i) {
      this.indexTextBadge = -1;
    } else {
      this.indexTextBadge = i;
    }
  }

  selectedColorBadge(i: number): void {
    if (this.indexColorBadge === i) {
      this.indexColorBadge = -1;
    } else {
      this.indexColorBadge = i;
    }
  }

  getPrice(): number {
    let priceProduct: number = this.dataCard.product.price.price;

    if (this.dataCard.product.price.discount !== null) {
      priceProduct *= this.dataCard.product.price.discount / 100;
    }

    return priceProduct;
  }

  compareDates(date: Date): boolean {
    let days: number = 15;
    let timeNew: number = days * 86400;

    let today = new Date().getTime();

    if (date.getTime() > today - timeNew) {
      return true;
    }

    return false;
  }
}

const data = {
  image: {
    jpg: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
    webp: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
    title: 'Title',
  },

  product: {
    brand: 'Marca',
    name: 'Pintalabios rojo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    badgesText: [
      {
        id: '1',
        name: '100ml',
        textSize: 'text-s',
        stock: 5,
        isButtonText: true,
        isButtonColor: false,
      },
      {
        id: '2',
        name: '50ml',
        textSize: 'text-s',
        stock: 3,
        isButtonText: true,
        isButtonColor: false,
      },
    ],
    badgesColor: [
      {
        id: '3',
        name: 'orange',
        color: '#e34e2e',
        stock: 2,
        isButtonText: false,
        isButtonColor: true,
      },
      {
        id: '4',
        name: 'pink',
        color: '#EE109A',
        stock: 0,
        isButtonText: false,
        isButtonColor: true,
      },
    ],
    price: {
      id: '1',
      price: 19.95,
      offer: '3x2',
      discount: 50,
    },
    trend: true,
    forSale: true,
    stock: 2,
    dateCreated: new Date('12/04/2024'),
  },
};

/*
,
        {
          name: 'Trend',
          textSize: 'text-s',
          stock: null,
        },
        {
          name: '3x2',
          textSize: 'text-s',
          stock: null,
        }*/
