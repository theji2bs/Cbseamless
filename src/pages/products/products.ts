import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';


import { ModalController} from 'ionic-angular';

import { Product }from '../../models/product.model';
import { Cart }from '../../models/cart.model';

import { CartModalComponent }from '../../components/cart-modal/cart-modal';




@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {

    private cart: Cart;
    private products: Product[];

  constructor(/*public navCtrl: NavController*,*/ public modalCtrl: ModalController ) {

    this.cart = new Cart(10.99, 13);
    this.products = [
      new Product(1, 'BARBACOA', 'https://s1.lmcdn.fr/multimedia/ac1401007243/daa8569e5788/produits/table-de-jardin-naterial-porto-carree-miel.jpg?$p=tbzoom',
        7.90, "Tomàquet, mozzarella, bacó, salsa barbacoa, pollastre o carn picada.", 1),
      new Product(2, 'BOLOGNESA', '',
        8.40, "Tomàquet, mozzarella, salsa bolognesa i parmesà.", 1),
      new Product(3, 'CALZONE', '',
        8.40, "Tomàquet, mozzarella, pernil dolç i xampinyons.", 1),
      new Product(4, 'CARBONARA', '',
        7.90, "Tomàquet, mozzarella, bacó, salsa carbonara i parmesà.", 1),
      new Product(5, ' CINQUE FORMAGGI', '',
        7.90, "Tomàquet, mozzarella, emmental, rocafort, provolone i parmesà.", 1),
      new Product(6, 'LA VENDETTA', '',
        8.90, "Tomàquet, mozzarella, pernil salat, rúcula i parmesà en làmines", 1),
      new Product(7, 'MARGARITA', '',
        6.90, "Tomàquet, mozzarella i orenga.", 1),
      new Product(8, 'MEXICANA', '',
        8.40, "Tomàquet, mozzarella, carn picada, tabasc i bitxos verds.", 1),
      new Product(9, 'RÚSTICA', '',
        8.60, "Tomàquet, mozzarella, bacó, tomàquet natural, ceba, carn picada o pollastre.", 1),
      new Product(10, 'TROPICAL', '',
        7.90, " Tomàquet, mozzarella, pernil dolç i pinya.", 1),
    ];
  }


  presentCartModal() {
    let profileModal = this.modalCtrl.create(CartModalComponent, { cart: this.cart });
    profileModal.present();
  }

  addToCart(product: Product): void {
    // Prvent modifiy original values
    var clone = new Product(product.getId(), product.getName(), product.getImg(),
      product.getPrice(), product.getDesc(), product.getQuantity());

    this.cart.addProduct(clone);
  }

  }

