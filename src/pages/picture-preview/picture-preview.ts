import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, Platform, Gesture} from 'ionic-angular';
import { CameraPreview, CameraPreviewOptions} from '@ionic-native/camera-preview';
import { Navbar } from "ionic-angular";
import { Flashlight } from "@ionic-native/flashlight";

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
  @ViewChild('img') element;
  private gesture: Gesture;
  private turnFlash: boolean = false;

  constructor(private navCtrl: NavController, private cameraPreview: CameraPreview,
              private platform: Platform, private flashLight: Flashlight) {
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
      this.gesture.destroy();
      this.stopCamera();
      this.navCtrl.pop().then();
    };

    this.gesture = new Gesture(this.element.nativeElement);
    this.gesture.listen();
    this.gesture.on('pinch', e => console.log(e.scale));
  };

  /**
   * 카메라 on
   */
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

  /**
   * 카메라 off
   */
  stopCamera() {
    this.gesture.destroy();
    this.cameraPreview.stopCamera().then().catch(error => {console.log(error)});
  };

  /**
   * 카메라 변경(앞, 뒤)
   */
  switchCamera() {
    this.cameraPreview.switchCamera();
  }

  /**
   * 카메라 effect 설정
   * @param effect
   */
  changeColorEffect(effect) {
    this.cameraPreview.setColorEffect(effect);
  }

  /**
   * 카메라 flash turn on/off
   */
  turnFlashLight() {
    if (this.flashLight.isSwitchedOn()) {
      // turn off
      this.flashLight.switchOff().then().catch(error => console.log(error));
      this.turnFlash = false;
    } else {
      // turn on
      this.flashLight.switchOn().then().catch(error => console.log(error));
      this.turnFlash = true;
    }
  }

}
