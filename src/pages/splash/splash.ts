import { Component } from '@angular/core';
import { ViewController, Events } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {
  
  constructor(public viewCtrl: ViewController,
    public events: Events, 
    public splashScreen: SplashScreen) {    
     }

    ionViewDidEnter() {
      this.splashScreen.hide();      
      setTimeout(() => {
        this.viewCtrl.dismiss().catch(() => console.log('view was not dismissed'));
      }, 4000); 
    }

     
      
}
