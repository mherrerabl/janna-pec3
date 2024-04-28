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
  styleUrl: './table.component.scss',
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
  titles: ['id', 'fecha', 'usuario', 'estado'],
  rows: [
    {
      rowInfo: ['1', '24/04/2024', 'Jane Doe', 'Enviado'],
      detail: [
        {
          title: 'id',
          content: '123',
          type: 'string',
        },
        {
          title: 'usuario',
          content: 'jane',
          type: 'string',
        },
        {
          title: 'productos',
          content: '123',
          type: 'string',
        },
        {
          title: 'precio',
          content: '13€',
          type: 'string',
        },
        {
          title: 'Fecha',
          content: '24/04/2024',
          type: 'string',
        },
        {
          title: 'fecha de modificación',
          content: '24/04/2024',
          type: 'string',
        },
        {
          title: 'Dirección',
          content: 'Calle Circunvalación, 170, 08240, Manresa',
          type: 'string',
        },
      ],
    },
    {
      rowInfo: ['1', '24/04/2024', 'Jane Doe', 'Enviado'],
      detail: [
        {
          title: 'id',
          content: '123',
          type: 'string',
        },
        {
          title: 'usuario',
          content: 'jane',
          type: 'string',
        },
        {
          title: 'productos',
          content: ['123', 'aaa', 'aaaadd'],
          type: 'list',
        },
        {
          title: 'precio',
          content: '13€',
          type: 'string',
        },
        {
          title: 'Fecha',
          content: '24/04/2024',
          type: 'string',
        },
        {
          title: 'fecha de modificación',
          content: '24/04/2024',
          type: 'string',
        },
        {
          title: 'Dirección',
          content: 'Calle Circunvalación, 170, 08240, Manresa',
          type: 'string',
        },
        {
          title: 'Imagenes',
          content: [
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
          type: 'image',
        },
      ],
    },
  ],
  action: true,
};
