import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController} from 'ionic-angular';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { PortfolioPage } from "../portfolio/portfolio";
import { UploadPage } from "../upload/upload";
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
	public imgUrl: string;
	private base64Prefix: string = 'data:image/jpeg;base64,';
	private blurFlag: boolean = false;

	constructor(public navCtrl: NavController, private camera: Camera,
              private modalCtrl: ModalController) {
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

	takePhoto() {
	  const options: CameraOptions = {
	    quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
    };

	  this.camera.getPicture(options).then(
      (imageData) => {
        // let safeUrl: any = this.base64Prefix + imageData;
        this.imgUrl = this.base64Prefix + imageData;
        this.openPictureModal();
      }, err => {console.log(err);}
    ).catch(error => {console.log(error)});
  };

  openPictureModal() {
	  let modal = this.modalCtrl.create(UploadPage, {"imgUrl": this.imgUrl});
	  modal.present().then().catch(error => {console.log(error)});
  };

  goPreviewPhoto() {
    this.navCtrl.push(PicturePreviewPage);
  }
}
