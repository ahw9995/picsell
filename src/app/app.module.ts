import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import { MyApp } from './app.component';

import { NativeStorage } from '@ionic-native/native-storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { CameraPreview } from '@ionic-native/camera-preview';
import {LogoutPage} from "../pages/logout/logout";
import {LoginPage} from "../pages/login/login";
import {LoginPageModule} from "../pages/login/login.module";
import {LogoutPageModule} from "../pages/logout/logout.module";
import {HomePageModule} from "../pages/home/home.module";
import {UploadPageModule} from "../pages/upload/upload.module";
import {PicturePreviewPageModule} from "../pages/picture-preview/picture-preview.module";
import {Flashlight} from "@ionic-native/flashlight";

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    LogoutPageModule,
    HomePageModule,
    UploadPageModule,
    PicturePreviewPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    LogoutPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    Camera,
    CameraPreview,
    Flashlight,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
