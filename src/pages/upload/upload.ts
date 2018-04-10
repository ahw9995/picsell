import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

  public imgUrl: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imgUrl = this.navParams.get("imgUrl");
    console.log("nav params ======> " + this.navParams.get("imgUrl"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }

}
