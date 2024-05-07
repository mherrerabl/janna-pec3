export enum TypeUser {
  'user',
  'admin',
}

export class UserClass {
  id: string;
  name: string;
  surname: string;
  password: string;
  email: string;
  phone: number | null;

  constructor(
    id: string,
    name: string,
    surname: string,
    password: string,
    email: string,
    phone: number | null
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.password = password;
    this.email = email;
    this.phone = phone;
  }
}
