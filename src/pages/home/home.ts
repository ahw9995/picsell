import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { PortfolioPage } from "../portfolio/portfolio";
import { MenuController } from "ionic-angular";

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	public liked1:boolean=false;
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
	private base64Prefix: string = 'data:image/jpeg;base64,';
	private blurFlag: boolean = false;

	constructor(public navCtrl: NavController, private camera: Camera, private menuCtrl: MenuController) {
	  this.menuCtrl.enable(true);
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

	like(no){
		if(this.liked1){
			this.liked1 = false;
		}else{
			this.liked1 = true;
		}
	};

  showPortfolio() {
    this.navCtrl.push("PortfolioPage").then();
  }

	doRefresh(refresher) {
	  this.blurFlag = true;
	  setTimeout(() => {
	    refresher.complete();
      this.blurFlag = false;
    }, 2000);
  };

	takePhoto() {
	  let options: CameraOptions = {
	    quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

	  this.camera.getPicture(options).then(
      (imageData) => {
        let safeUrl: any = this.base64Prefix + imageData;
        this.photos.push(safeUrl);
        this.photos.reverse();
      }, err => {console.log(err);}
    )
  };
}
