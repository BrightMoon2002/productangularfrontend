export class Product {
  id: number;
  name: string;
  avatarProduct: string;
  description: string;
  price: number;
  dateOfManufacture: string;

  constructor(id: number, name: string, avatarProduct: string, description: string, price: number, dateOfManufacture: string) {
    this.id = id;
    this.name = name;
    this.avatarProduct = avatarProduct;
    this.description = description;
    this.price = price;
    this.dateOfManufacture = dateOfManufacture;
  }
}
