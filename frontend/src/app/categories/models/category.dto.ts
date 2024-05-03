export enum Department {
  init = 'null',
  shop = 'Shop',
  treatments = 'Treatments',
}

export class CategoryDTO {
  id: string;
  name: string;
  department: Department;
  category_id?: CategoryDTO;

  constructor(
    id: string,
    name: string,
    department: Department,
    category_id?: CategoryDTO
  ) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.category_id = category_id;
  }
}
