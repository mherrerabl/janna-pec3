import { Injectable } from '@angular/core';
import { UserDTO } from '../../users/models/user.dto';
import { ShipmentDTO } from '../models/shipment.dto';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
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

  getMethodShipment(): ShipmentDTO {
    let shipment: ShipmentDTO = {
      method: '',
      address: '',
    };

    if (typeof window !== 'undefined') {
      shipment = JSON.parse(localStorage.getItem('shipment') as any);
    }
    return shipment;
  }

  saveMethodShipment(shipment: ShipmentDTO): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('shipment', JSON.stringify(shipment));
    }
  }

  removeMethodShipment(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('shipment');
    }
  }
}
