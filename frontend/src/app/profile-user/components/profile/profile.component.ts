import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownDTO } from '../../../shared/models/dropdown.dto';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  dataDropdown: DropdownDTO;

  title!: string;

  constructor(private route: Router) {
    this.title = 'Perfil';
    this.dataDropdown = this.getData();

    this.dataDropdown.list.forEach((list) => {
      if (list.link === this.route.url.split('/').pop()) {
        this.title = list.name;
      }
    });
    this.dataDropdown = this.getData();
  }
  getData(): DropdownDTO {
    return {
      title: this.title,
      list: [
        {
          link: 'personal',
          name: 'Datos personales',
        },
        {
          link: 'address',
          name: 'Direcciones',
        },
        {
          link: 'pedidos',
          name: 'Pedidos',
        },
        {
          link: 'citas',
          name: 'Citas',
        },
        {
          link: 'tratamientos',
          name: 'Tratamientos',
        },
      ],
    };
  }
}
