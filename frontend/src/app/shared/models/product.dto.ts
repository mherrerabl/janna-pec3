import { ImageDTO } from './image.dto';

export interface ProductDTO {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: ImageDTO;
  stock: number;
}
