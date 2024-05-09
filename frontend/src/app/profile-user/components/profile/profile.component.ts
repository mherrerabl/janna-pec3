import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { DropdownDTO } from '../../../shared/models/dropdown.dto';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
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
export class ProfileComponent implements OnInit {
  dataDropdown: DropdownDTO;
  title: string = 'Perfil';

  iconBars = faBars;
  dropdownExpanded: boolean = false;

  constructor(private router: Router) {
    this.dataDropdown = this.getData();
    this.getTitle(this.router.url.split('/').pop());

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        let url = event.url.split('/').shift();

        if (url) {
          this.getTitle(url);
        }
      }
    });
  }

  ngOnInit(): void {}

  getTitle(url: any): void {
    this.title = 'Perfil';
    this.getData().list.forEach((list) => {
      if (list.link === url) {
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
          link: 'direcciones',
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
