import { Component } from '@angular/core';
import {AlertController, App, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {LoginPage} from "../login/login";

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCtrl: ViewController, private alertCtrl: AlertController,
              private appCtrl: App) {
  }

  dismiss() {
    this.viewCtrl.dismiss().then();
  }

  showLogoutConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
          }
        },
        {
          text: 'Agree',
          handler: () => {

            this.appCtrl.getRootNav().push(LoginPage);
          }
        }
      ]
    });
    confirm.present().then( () => {
        this.dismiss();
      }
    );
  }
}
