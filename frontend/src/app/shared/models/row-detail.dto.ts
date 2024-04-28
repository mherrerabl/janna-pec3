import { BadgeDTO } from './badge.dto';
import { ImageDTO } from './image.dto';
import { ListProductsDTO } from './list-products.dto';

export interface RowDetailDTO {
  title: string;
  content: string | string[] | ListProductsDTO[] | ImageDTO[] | BadgeDTO[];
  type: string;
}
