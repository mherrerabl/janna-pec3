import { Component, Input, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { Observable } from 'rxjs';
import { ProductDTO } from '../../models/product.dto';
import { LocalStorageService } from '../../services/local-storage.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  @Input() dataProducts: ProductDTO[] = [];
  iconClose = faXmark;

  showCart$!: Observable<'open' | 'close'>;

  constructor(
    private localService: LocalStorageService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.showCart$ = this.modalService.watchCart();
    this.getCart();
  }

  getCart(): void {
    this.dataProducts = this.localService.getCart();
  }

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

  closeCart(): void {
    this.modalService.closeCart();
  }
}
