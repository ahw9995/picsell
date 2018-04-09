import { Component } from '@angular/core';
import {IonicPage, Loading, NavController, NavParams} from 'ionic-angular';
import { LoadingController } from "ionic-angular";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait....",
      duration: 3000
    });
    loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  enterWebsite(){
    this.navCtrl.setRoot('HomePage');

  }
}
