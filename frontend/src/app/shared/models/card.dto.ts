import { BadgeDTO } from './badge.dto';
import { PriceDTO } from './price.dto';

export interface CardDTO {
  image: {
    jpg: string;
    webp: string;
    title: string;
  };
  product: {
    brand: string;
    name: string;
    description: string;
    badgesText: BadgeDTO[] | null;
    badgesColor: BadgeDTO[] | null;
    price: PriceDTO;
    trend: boolean;
    forSale: boolean;
    stock: number;
    dateCreated: Date;
  };
}
