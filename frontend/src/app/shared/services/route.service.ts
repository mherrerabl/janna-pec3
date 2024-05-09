import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

interface fixedRoute {
  url: string;
  title: string;
}
@Injectable({
  providedIn: 'root',
})
export class RouteService {
  title: string;
  urls: string[] = [];
  constructor(private router: Router, private location: Location) {
    this.title = '';

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.urls = event.url.split('/');
        if (this.urls[0] === '') {
          this.urls.shift();
        }
      }
    });
  }

  getProfileFormId(): string | null {
    let urls: string[] = [];
    let id: string = '';
    const isNumeric = (string: string) => /^[+-]?\d+(\.\d+)?$/.test(string);

    urls = this.router.url.split('/');
    if (urls[0] === '') {
      urls.shift();
    }

    id = urls[urls.length - 1];

    if (isNumeric(id)) {
      return id;
    }
    return null;
  }

  back(): void {
    this.location.back();
  }

  getRoutesFixed(): fixedRoute[] {
    return [
      {
        url: 'personal',
        title: 'Datos personales',
      },
      {
        url: 'personal/nuevo',
        title: 'Datos personales',
      },
      {
        url: 'personal',
        title: 'Datos personales',
      },
      {
        url: 'direcciones',
        title: 'Direcciones',
      },
      {
        url: 'pedidos',
        title: 'Pedidos',
      },
      {
        url: 'citas',
        title: 'Citas',
      },
      {
        url: 'tratamientos',
        title: 'Tratamientos',
      },
    ];
  }
}
