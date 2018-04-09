import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";

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
	private urlPreFix: string = 'file://';
	private base64Prefix: string = 'data:image/jpeg;base64,';
	private sendImage: string;
	private imageblob: any;

	constructor(public navCtrl: NavController, private camera: Camera) {

	}

	enterWebsite(){
		this.navCtrl.push('HomePage');
	}

	like(no){

		if(this.liked1){
			this.liked1 = false;
		}else{
			this.liked1 = true;
		}
	}

	showPortfolio(){
		this.navCtrl.push('PortfolioPage');
	}

	takePhoto() {
	  console.log("take a photo");
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
