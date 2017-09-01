import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MenuController, AlertController, LoadingController, Loading, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../providers/auth-service/auth-service'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loading: Loading;

  account: { SGID: string, password: string } = {
    SGID: 'test@example.com',
    password:null// '123'
  };
  hasLoggedIn:boolean;
  username:string;

  constructor(public menu: MenuController,
    public authService: AuthService,
    private alertCtrl: AlertController, 
    private loadingCtrl:LoadingController,
    public events:Events,
    public storage: Storage
  ) {  }

  // Attempt to login in through our User service
  Login(form: NgForm) {    
    //console.log(form);
    // console.log(this.account);
    if(form.valid){
      this.showLoading()
      var res = this.authService.login(this.account);
      if(res){
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

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
    console.log('forgot password');
    this.checkIsLogin();
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

  checkIsLogin() {
    console.log("------------>>checkIsLogin");
    Promise.all([
        this.authService.StorageGet("isLoggedIn", true).then((data:boolean) => 
            { this.hasLoggedIn = data})
        ,this.authService.StorageGet("username", null).then((data:string) => 
        {
          this.username = data;
        })
      ]).then(() => { 
            console.log("checkIsLogin------------>> "+ this.hasLoggedIn);
            console.log("checkIsLogin------------>> "+ this.username);
            if(this.hasLoggedIn){
              this.events.publish('user:login');
           }
         
        });
  
  }
}
