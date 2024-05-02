export class MailDTO {
  name: string;
  surname: string;
  email: string;
  query: string;

  constructor(name: string, surname: string, email: string, query: string) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.query = query;
  }
}
