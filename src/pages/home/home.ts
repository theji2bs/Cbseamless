import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Instagram } from "ng2-cordova-oauth/core";  
import { OauthCordova } from 'ng2-cordova-oauth/platform/cordova';
import { UserService } from '../providers/user-service';
import { Auth, User } from '@ionic/cloud-angular';






@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public auth: Auth, public user: User) {


  }
  
  instagramLogout(){

this.auth.logout();
  }

  instagramLogin(){
alert("hello");
    this.auth.login('instagram').then((resp)=>{
//console.log("Successfully logged into instagram"+JSON.stringify(resp));
alert('Successfully logged into instagram'+JSON.stringify(resp));
// You can then maybe re-direct to the home page, or whatever page
//this.navCtrl.setRoot(ProductsPages);
}).catch((error)=>{

  alert('error '+error);

});
  }

}
