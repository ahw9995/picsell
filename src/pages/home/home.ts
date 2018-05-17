import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import { PortfolioPage } from "../portfolio/portfolio";
import {PicturePreviewPage} from "../picture-preview/picture-preview";

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	public list:any= [
	{value: 'assets/imgs/File1.webp', liked: false},
	{value: 'assets/imgs/File2.webp',liked: false},
	{value: 'assets/imgs/File3.webp',liked: false},
	{value: 'assets/imgs/File4.webp',liked: false},
	{value: 'assets/imgs/File5.webp',liked: false},
	{value: 'assets/imgs/1.jpeg',liked: false},
	{value: 'assets/imgs/2.jpeg',liked: false},
	{value: 'assets/imgs/3.jpeg',liked: false}
	];

	public photos: any;
	private blurFlag: boolean = false;

	constructor(public navCtrl: NavController) {
	}

  showPortfolio() {
    this.navCtrl.push("PortfolioPage").then();
  };

	doRefresh(refresher) {
	  this.blurFlag = true;
	  setTimeout(() => {
	    refresher.complete();
      this.blurFlag = false;
    }, 2000);
  };

  goPreviewPhoto() {
    this.navCtrl.push(PicturePreviewPage).then().catch(error => console.log(error));
  }

	doInfinite(infiniteScroll) {
		console.log('Begin async operation');

		setTimeout(() => {
			this.list.push({value: 'assets/imgs/File3.webp',liked: false});
			this.list.push({value: 'assets/imgs/File4.webp',liked: false});
			this.list.push({value: 'assets/imgs/File5.webp',liked: false});
			this.list.push({value: 'assets/imgs/1.jpeg',liked: false});

			console.log('Async operation has ended');
			infiniteScroll.complete();
		}, 1000);
	}
}
