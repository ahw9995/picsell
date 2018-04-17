import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html',
})
export class PopularPage {

  public list:any= [
    {name: 'Emeliy', value: 'assets/imgs/File1.webp', thums: 980},
    {name: 'John', value: 'assets/imgs/File2.webp', thums: 750},
    {name: 'Rosey', value: 'assets/imgs/File3.webp', thums: 700},
    {name: 'Daisy', value: 'assets/imgs/File4.webp', thums: 560},
    {name: 'Miley', value: 'assets/imgs/File5.webp', thums: 525},
    {name: 'Eva', value: 'assets/imgs/1.jpeg', thums: 432},
    {name: 'Rick', value: 'assets/imgs/2.jpeg', thums: 412},
    {name: 'Helly', value: 'assets/imgs/3.jpeg', thums: 295}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
