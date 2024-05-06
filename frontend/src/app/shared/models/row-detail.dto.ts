import { ImageClass } from '../../images/models/image';
import { BadgeDTO } from './badge.dto';
import { DirectionDTO } from './direction.dto';
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
      direction?: DirectionDTO;
    };
    list?: string[];
    products?: ListProductsDTO[];
    images?: ImageClass[];
    badges?: BadgeDTO[];
    seassons?: SeassonsDTO[];
  };
}
