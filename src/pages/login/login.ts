import { Component } from '@angular/core';
import {IonicPage, Loading, NavController, NavParams} from 'ionic-angular';
import { LoadingController } from "ionic-angular";
import {HomePage} from "../home/home";

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
      duration: 1000
    });
    loader.present().then();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  enterWebsite(){
    this.presentLoading();
    this.navCtrl.setRoot(HomePage).then();

  }
}
