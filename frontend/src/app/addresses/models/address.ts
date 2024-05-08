export class AddressClass {
  id: string;
  name: string;
  address: string;
  number: number;
  additionalInfo: string;
  zip: string;
  city: string;
  user_id: string;

  constructor(
    id: string,
    name: string,
    address: string,
    number: number,
    additionalInfo: string,
    zip: string,
    city: string,
    user_id: string
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.number = number;
    this.additionalInfo = additionalInfo;
    this.zip = zip;
    this.city = city;
    this.user_id = user_id;
  }
}
