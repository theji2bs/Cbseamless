import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { Cart }from '../../models/cart.model';
import { Product }from '../../models/product.model';

@Component({
  selector: 'cart-modal',
  templateUrl: 'cart-modal.html'
})
export class CartModalComponent {
  private cart: Cart;
  private products;

  constructor(public params: NavParams, public viewCtrl: ViewController) {
    console.log('cart', params.get('cart'));
    this.cart = params.get('cart');
    this.products = this.valuesToArray(this.cart.getProducts());
    console.log('products',this.products);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  // transform map to array
  // *ngfor cant iterate objects
  valuesToArray(obj) {
    return Object.keys(obj).map(function(key) { return obj[key]; });
  }

  add(product: Product): void {
    product.setQuantity(1,true);
  }

  remove(product: Product): void {
    this.cart.removeProduct(product);

    // remove item product array
    let trobat = false;
    let i = 0;

    while (i < this.products.length && !trobat) {
      if (this.products[i].getId() == product.getId()) {
        trobat = true;
      } else {
        i++;
      }
    }
    if (trobat) {
      this.products.splice(i, 1);
    }
    console.log('products',this.products);
  }

  less(product: Product): void {
  product.setQuantity(-1,true);
  }
}