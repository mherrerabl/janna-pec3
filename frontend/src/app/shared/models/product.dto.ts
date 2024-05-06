import { ImageClass } from '../../images/models/image';

export interface ProductDTO {
  product_id: string;
  product_variation_id: string | null;
  name: string;
  price: number;
  image: ImageClass;
  quantity: number;
  stock: number;
}
