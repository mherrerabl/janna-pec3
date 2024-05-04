import { PriceClass } from '../../shared/models/price';

export class TreatmentClass {
  id: string;
  name: string;
  description: string;
  sessions: number;
  duration: number;
  price: PriceClass;

  constructor(
    id: string,
    name: string,
    description: string,
    sessions: number,
    duration: number,
    price: PriceClass
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.sessions = sessions;
    this.duration = duration;
    this.price = price;
  }
}
