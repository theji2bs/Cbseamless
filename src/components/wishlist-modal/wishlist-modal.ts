
import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { Cart }from '../../models/cart.model';
import { Product }from '../../models/product.model';

import { Wishlist }from '../../models/wishlist.model';



@Component({
  selector: 'wishlist-modal',
  templateUrl: 'wishlist-modal.html'
})
export class WishlistModalComponent {
  private wishlist: Wishlist;
  private products;

  constructor(public params: NavParams, public viewCtrl: ViewController) {
    console.log('wishlist', params.get('wishlist'));
    this.wishlist = params.get('wishlist');
    this.products = this.valuesToArray(this.wishlist.getProducts());
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
    this.wishlist.removeProduct(product);

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
