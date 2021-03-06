import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProductsPage } from '../pages/products/products';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { UserService } from '../providers/user-service';

import { CartModalComponent } from '../components/cart-modal/cart-modal';
import { WishlistModalComponent } from '../components/wishlist-modal/wishlist-modal';



const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'c5ba6ea6'
  }
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductsPage,
    CartModalComponent,
    WishlistModalComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductsPage,
    CartModalComponent,
    WishlistModalComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler},{provide: UserService, useClass: UserService}  ]
 
 // providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},{provide: UserService, useClass: UserService}]
})
export class AppModule {}
