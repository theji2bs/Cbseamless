export class Product {
  private id: number;
  private name: string;
  private imgUrl: string;
  private price: number;
  private desc: string;
  private quantity: number;

  constructor(id: number, name: string, imgUrl: string, price: number, desc: string, quantity: number) {
    this.setId(id);
    this.setName(name);
    this.setImg(imgUrl);
    this.setPrice(price);
    this.setDesc(desc);
    this.setQuantity(quantity);
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getImg(): string {
    return this.imgUrl;
  }

  public setImg(imgUrl: string): void {
    this.imgUrl = imgUrl;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public getDesc(): string {
    return this.desc;
  }

  public setDesc(desc: string): void {
    this.desc = desc;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public setQuantity(quantity: number, relative: boolean = false): void {
    if (relative === true) {
      this.quantity += quantity;
    } else {
      this.quantity = quantity;
    }
    if (this.quantity < 1) this.quantity = 1;
  }

  public getTotal(): number {
    return (this.getQuantity() * this.getPrice());
  };
}