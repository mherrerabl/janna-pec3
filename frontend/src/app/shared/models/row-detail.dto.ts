import { AddressClass } from '../../addresses/models/address';
import { ImageClass } from '../../images/models/image';
import { BadgeDTO } from './badge.dto';
import { ListProductsDTO } from './list-products.dto';

interface SeassonsDTO {
  date: Date;
  state: string;
}

export interface RowDetailDTO {
  title: string;
  content: {
    info?: {
      text?: string;
      price?: number;
      days?: Date;
      date?: Date;
      address?: AddressClass;
    };
    list?: string[];
    products?: ListProductsDTO[];
    images?: ImageClass[];
    badges?: BadgeDTO[];
    seassons?: SeassonsDTO[];
  };
}
