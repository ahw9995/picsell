import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, Platform} from 'ionic-angular';
import { CameraPreview, CameraPreviewOptions} from '@ionic-native/camera-preview';
import { Navbar } from "ionic-angular";

/**
 * Generated class for the PicturePreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-picture-preview',
  templateUrl: 'picture-preview.html',
})
export class PicturePreviewPage {
  @ViewChild(Navbar) navBar: Navbar;
  constructor(private navCtrl: NavController, private cameraPreview: CameraPreview,
              private platform: Platform) {
    this.startCamera();
    this.platform.registerBackButtonAction(() => {
      this.stopCamera();
      this.navCtrl.pop().then();
    }, 1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PicturePreviewPage');
    this.navBar.backButtonClick = (e:UIEvent)=>{
      console.log(e);
      this.stopCamera();
      this.navCtrl.pop().then();
    }
  };

  startCamera() {
    const cameraPreviewOptions: CameraPreviewOptions = {
      x: 0,
      y: window.screen.height - window.innerHeight - 9,
      width: window.screen.width,
      height: window.screen.height / 1.7,
      camera: "BACK",
      tapPhoto: false,
      previewDrag: false,
      disableExifHeaderStripping: false,
      toBack: true,
      alpha: 1
    };

    this.cameraPreview.startCamera(cameraPreviewOptions).then((res) => console.log(res));
  };

  stopCamera() {
    this.cameraPreview.stopCamera().then().catch(error => {console.log(error)});
  };
}
