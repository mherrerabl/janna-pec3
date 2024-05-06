import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageClass } from '../../../images/models/image';
import { ProductClass } from '../../../products/models/product';
import { ProductVariationClass } from '../../../products/models/product-variation';
import { BadgeDTO } from '../../models/badge.dto';
import { PriceClass } from '../../models/price';
import { ProductDTO } from '../../models/product.dto';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() dataCard!: ProductClass;
  @Output() emitProduct = new EventEmitter<ProductDTO>();

  price: PriceClass = new PriceClass('', 0, null, null);
  priceVariationText: number = 0;
  priceVariationColor: number = 0;

  indexVariationText: number = -1;
  indexVariationColor: number = -1;

  dataVariationText!: BadgeDTO;
  dataVariationColor!: BadgeDTO;

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

  constructor(private localStorage: LocalStorageService) {}
  ngOnInit(): void {
    if (this.dataCard.price !== undefined) {
      this.price = this.dataCard.price;
    }
  }

  createBadge(variation: ProductVariationClass): BadgeDTO {
    return {
      id: variation.id,
      name: variation.name,
      textSize: variation.color === null ? 'text-s' : '',
      color: variation.color === null ? '' : variation.color,
      stock: variation.stock,
      isButtonText: variation.color === null ? true : false,
      isButtonColor: variation.color !== null ? true : false,
    };
  }

  /*
  dataSelectedVariation(variation: BadgeDTO, type: string): void {
    if (type === 'textBadge') {
      this.dataVariationText = variation;
    }

    if (type === 'colorBadge') {
      this.dataVariationColor = variation;
    }
  }*/

  selectedVariationText(
    i: number,
    variation: ProductVariationClass | undefined
  ): void {
    if (variation !== undefined && variation.price !== undefined) {
      this.price = variation.price;
    }

    if (this.indexVariationText === i) {
      this.indexVariationText = -1;
    } else {
      this.indexVariationText = i;
    }
  }

  selectedVariationColor(
    i: number,
    variation: ProductVariationClass | undefined
  ): void {
    if (variation !== undefined && variation.price !== undefined) {
      this.price = variation.price;
    }

    if (this.indexVariationColor === i) {
      this.indexVariationColor = -1;
    } else {
      this.indexVariationColor = i;
    }
  }

  getPrice(): number {
    let priceProduct: number = this.price.price;

    if (this.price.discount !== null) {
      priceProduct *= this.price.discount / 100;
    }

    return priceProduct;
  }

  compareDates(val: Date): boolean {
    let date = new Date(val);

    let days: number = 15;
    let timeNew: number = days * 86400;

    let today = new Date().getTime();

    if (date.getTime() > today - timeNew) {
      return true;
    }

    return false;
  }

  addProductToCart(): void {
    let image!: ImageClass;

    if (this.dataCard.images !== undefined) {
      image = this.dataCard.images[0];
    }
    let product: ProductDTO = {
      product_id: this.dataCard.id,
      product_variation_id: null,
      name: this.dataCard.name,
      price: this.price.price,
      image: image,
      quantity: 1,
      stock: this.dataCard.stock,
    };

    this.localStorage.addProductToCart(product);
  }
}
