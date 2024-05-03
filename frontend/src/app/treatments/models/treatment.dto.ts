import { PriceDTO } from '../../shared/models/price-dto';

export class TreatmentDTO {
  id: string;
  name: string;
  description: string;
  sessions: number;
  duration: number;
  price: PriceDTO;

  constructor(
    id: string,
    name: string,
    description: string,
    sessions: number,
    duration: number,
    price: PriceDTO
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.sessions = sessions;
    this.duration = duration;
    this.price = price;
  }
}
