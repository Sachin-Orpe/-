import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, AlertController, LoadingController, Loading, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../providers/auth-service/auth-service'

import * as globalvars from '../global/globalVars';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loading: Loading;

  backgrounds = [
    'assets/images/background/background-1.jpg',
    'assets/images/background/background-2.jpg'
  ];
  account: { SGID: string, password: string } = {
    SGID: '',
    password:null// '123'
  };
  
  constructor(public navCtrl: NavController,
    public authService: AuthService,
    private alertCtrl: AlertController, 
    private loadingCtrl:LoadingController,
    public events:Events,
    public storage: Storage
  ) {  }

  // Attempt to login in through our User service
  Login(form: NgForm) {    
    // console.log(form);
    // console.log(this.account);
    if(form.valid){
      this.showLoading()
      var res = this.authService.login(this.account);
      if(res){
        globalvars.userInfo.SGID=this.account.SGID;
        this.loading.dismiss();   
        this.events.publish('user:login');
      }
      else{
        this.showError("Access Denied");
      }
    }
  }

  forgotPassword(){
    console.log('forgot password');
  }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
