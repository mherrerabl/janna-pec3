import { Component, Input } from '@angular/core';
import { CardDTO } from '../../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() dataCard: CardDTO = {
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
          name: '100ml',
          textSize: 'text-s',
          stock: 5,
        },
        {
          name: '50ml',
          textSize: 'text-s',
          stock: 0,
        },
      ],
      badgesColor: [
        {
          name: 'orange',
          color: '#e34e2e',
          stock: 2,
        },
        {
          name: 'pink',
          color: '#EE109A',
          stock: 0,
        },
      ],
    },
  };
}
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
