import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { RowDTO } from '../../models/row.dto';
import { TableDTO } from '../../models/table.dto';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
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
export class TableComponent {
  dataTable: TableDTO = ELEMENT_DATA;
  expandedElement!: RowDTO | null;
  currentPage: number = 1;

  prueba(): void {
    console.log('a');
  }
}

const ELEMENT_DATA: TableDTO = {
  titles: [
    {
      title: 'id',
      smallScreens: true,
    },
    {
      title: 'fecha',
      smallScreens: true,
    },
    {
      title: 'usuario',
      smallScreens: false,
    },
    {
      title: 'estado',
      smallScreens: true,
    },
  ],
  rows: [
    {
      rowInfo: ['1', '24/04/2024', 'Jane Doe', 'Enviado'],
      detail: [
        {
          title: 'id',
          content: { info: { text: '123' } },
        },
        {
          title: 'usuario',
          content: { info: { text: 'jane' } },
        },
        {
          title: 'productos',
          content: {
            products: [
              {
                quantity: 2,
                name: 'product 1',
                price: 14.5,
              },
              {
                quantity: 2,
                name: 'product 1',
                price: 14.5,
              },
              {
                quantity: 2,
                name: 'product 1',
                price: 14.5,
              },
            ],
          },
        },
        {
          title: 'Sesiones',
          content: {
            seassons: [
              {
                date: new Date(),
                state: 'Realizada',
              },
              {
                date: new Date(),
                state: 'Realizada',
              },
              {
                date: new Date(),
                state: 'Realizada',
              },
            ],
          },
        },
        {
          title: 'Variaciones',
          content: {
            badges: [
              {
                id: '3',
                name: 'orange',
                color: '#e34e2e',
                isButtonText: false,
                isButtonColor: false,
              },
              {
                id: '4',
                name: 'pink',
                color: '#EE109A',
                isButtonText: false,
                isButtonColor: false,
              },
            ],
          },
        },
        {
          title: 'precio',
          content: { info: { text: '13€' } },
        },
        {
          title: 'Fecha',
          content: { info: { text: '24/04/2024' } },
        },
        {
          title: 'fecha de modificación',
          content: { info: { text: '24/04/2024' } },
        },
        {
          title: 'Dirección',
          content: {
            info: { text: 'Calle Circunvalación, 170, 08240, Manresa' },
          },
        },
      ],
    },
    {
      rowInfo: ['1', '24/04/2024', 'Jane Doe', 'Enviado'],
      detail: [
        {
          title: 'id',
          content: { info: { text: '123' } },
        },
        {
          title: 'usuario',
          content: { info: { text: 'jane' } },
        },
        {
          title: 'productos',
          content: { list: ['123', 'aaa', 'aaaadd'] },
        },
        {
          title: 'precio',
          content: { info: { price: 13.5 } },
        },
        {
          title: 'Fecha',
          content: { info: { date: new Date() } },
        },
        {
          title: 'Días activo',
          content: { info: { days: new Date('2024-04-01') } },
        },
        {
          title: 'Dirección',
          content: {
            info: {
              direction: {
                id: 'string',
                name: 'Casa',
                address: 'Calle Circunvalación',
                number: 170,
                zip: '08240',
                city: 'Manresa',
              },
            },
          },
        },
        {
          title: 'Imagenes',
          content: {
            images: [
              {
                jpg: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
                webp: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
                title: 'title',
              },
              {
                jpg: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
                webp: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
                title: 'title',
              },
              {
                jpg: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
                webp: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
                title: 'title',
              },
              {
                jpg: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
                webp: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
                title: 'title',
              },

              {
                jpg: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
                webp: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
                title: 'title',
              },
            ],
          },
        },
      ],
    },
  ],
  action: true,
};
