import { Product } from './product.model';

export interface MapProducts {
  [id: number]: Product;
}

export class Wishlist {
  private shipping: number;
  private tax: number;
  private products: MapProducts = {};

  constructor(shipping: number, tax: number) {
    this.setShipping(shipping);
    this.setTax(tax);
    this.setProducts({});
  }

  public getShipping(): number {
    return this.shipping;
  }

  public setShipping(shipping: number): void {
    this.shipping = shipping;
  }

  public getTax(): number {
    return this.tax;
  }

  public setTax(tax: number): void {
    this.tax = tax;
  }

  public getProducts(): MapProducts {
    return this.products;
  }

  public setProducts(products: MapProducts): void {
    this.products = products;
  }

  public addProduct(product: Product): void {
    if (this.products.hasOwnProperty(product.getId())) {
      //increment quantity
      this.products[product.getId()].setQuantity(product.getQuantity(), true);
    } else {
      //add
      this.products[product.getId()] = product;
    }
  }

  public removeProduct(product: Product): void {
    if (this.products.hasOwnProperty(product.getId())) {
      delete this.products[product.getId()];
    }
  }

  public lessProduct(product: Product): void {
    if (this.products.hasOwnProperty(product.getId())) {
      if (this.products[product.getId()].getQuantity() - product.getQuantity() <= 0) {
        //remove
        delete this.products[product.getId()];
      } else {
        //decres quantity
        this.products[product.getId()].setQuantity(-product.getQuantity(), true);
      }
    }
  }

  public removeAllProducts(): void {
    this.setProducts({});
  }

  public getTotalItems(): number {
    var count = 0;

    for (var key in this.products) {
      count += this.products[key].getQuantity();
    }

    return count;
  }

  public getTotalUniqueItems() {
    return Object.keys(this.products).length;
  }

  public getSubTotal(): number {
    var total = 0;

    for (var key in this.products) {
      total += this.products[key].getTotal();
    }

    return total;
  }

  public calculeTax(): number {
    return (this.getSubTotal() / 100) * this.getTax();
  }

  public totalCost(): number {
    return (this.getSubTotal() + this.getShipping() + this.calculeTax());
  }


}