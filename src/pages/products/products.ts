import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';


import { ModalController} from 'ionic-angular';

import { Product }from '../../models/product.model';
import { Cart }from '../../models/cart.model';
import { Wishlist }from '../../models/wishlist.model';

import { CartModalComponent }from '../../components/cart-modal/cart-modal';
import { WishlistModalComponent }from '../../components/wishlist-modal/wishlist-modal';




@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {

    private cart: Cart;
    private products: Product[];
   
    private wishlist: Wishlist;

  constructor(/*public navCtrl: NavController*,*/ public modalCtrl: ModalController ) {

    this.cart = new Cart(10.99, 13);
    
    this.wishlist = new Wishlist(10.99, 13);

    this.products = [
      new Product(1,'Chaise', 'https://s1.lmcdn.fr/multimedia/ac1401007243/daa8569e5788/produits/table-de-jardin-naterial-porto-carree-miel.jpg?$p=tbzoom',
        70.90, " C'est du bon matos", 1),
      new Product(2, 'Bonbonri', 'https://s2.lmcdn.fr/multimedia/831500087159/9d335721ab52/produits/meuble-de-salle-de-bains-de-60-a-79-brun-marron-ashley.jpg?$p=tbzoom',
        80.40, "Bon pour la chambre", 1),
      new Product(3, 'jcpas', 'https://s1.lmcdn.fr/multimedia/e11400234328/50de57c7d973/produits/pied-de-meuble-cylindrique-fixe-acier-brosse-gris-10-cm.jpg?$p=tbzoom',
        8.40, " pied de meuble", 1)
    ];
  }


  presentCartModal() {
    let profileModal = this.modalCtrl.create(CartModalComponent, { cart: this.cart });
    profileModal.present();
  }


    presentWishlistModal() {
    let profileModal = this.modalCtrl.create(WishlistModalComponent, { wishlist: this.wishlist });
    profileModal.present();
  }


  addToCart(product: Product): void {
    // Prvent modifiy original values
    var clone = new Product(product.getId(), product.getName(), product.getImg(),
      product.getPrice(), product.getDesc(), product.getQuantity());

    this.cart.addProduct(clone);
  }


    addToWishlist(product: Product): void {
    // Prvent modifiy original values
    var clone = new Product(product.getId(), product.getName(), product.getImg(),
      product.getPrice(), product.getDesc(), product.getQuantity());

    this.wishlist.addProduct(clone);
  }



  }

