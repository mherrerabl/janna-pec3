import { ImageClass } from '../../images/models/image';

export enum Department {
  init = 'null',
  shop = 'Shop',
  treatments = 'Treatments',
}

export class CategoryClass {
  id: string;
  name: string;
  department: Department;
  url: string;
  category_id?: CategoryClass;
  image?: ImageClass;

  constructor(
    id: string,
    name: string,
    department: Department,
    url: string,
    category_id?: CategoryClass
  ) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.url = url;
    this.category_id = category_id;
  }
}
