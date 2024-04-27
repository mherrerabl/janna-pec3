import { BadgeDTO } from './badge';
import { BadgeColorDTO } from './badge-color';

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
    badgesColor: BadgeColorDTO[] | null;
  };
}
