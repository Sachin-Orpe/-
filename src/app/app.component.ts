import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, Events, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Subject } from 'rxjs';

import { Storage } from '@ionic/storage';
import * as globalvars from '../pages/global/globalVars';
import { MenuModel } from '../interfaces/MenuModel';
import { AuthService } from '../providers/auth-service/auth-service'

import { SplashPage } from '../pages/splash/splash';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { BudgetPage } from '../pages/budget/budget';
import { PlanPage } from '../pages/plan/plan';
import { InvestmentDemandPage } from '../pages/investmentdemand/investmentdemand';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;  
  rootPage = LoginPage;
  pages: MenuModel[]= [
    { title: 'Dashboard', component: DashboardPage, active: true, icon: 'fa fa-home' },
    { title: 'Plan', component: PlanPage, active: false, icon: 'fa fa-flag'},
    { title: 'Budget', component: BudgetPage, active: false, icon: 'fa fa-briefcase' },
    { title: 'Investment Demand', component: InvestmentDemandPage, active: false, icon: 'fa fa-money' },
    { title: 'Setting', component: InvestmentDemandPage, active: false, icon: 'fa fa-cog' },
    { title: 'Logout', component: null, active: false, icon: 'fa fa-sign-out' }
  ];

  activePage=new Subject();
  hasLoggedIn:boolean;
  username:string='';
  avatarImgUrl:string="assets/images/avatar.png";
  BUName:string;
  BUID: number = 1;
  BUList:Array<{id:number,name:string}>;
  BUDetails : any;
  selectedYear: number;
  YearList :any=[];
  currentDocument :number;
  
  constructor( public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public events: Events,
    public storage: Storage,
    public authService: AuthService,
    public modalCtrl: ModalController,
  ) {
      this.initializeApp(modalCtrl);
      this.listenToLoginEvents();
  }

  initializeApp(modalCtrl) {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      //this.splashScreen.hide();
      let splash = modalCtrl.create(SplashPage);
      splash.present();
    });
  }

  listenToLoginEvents() {
    this.activePage.subscribe((selectedPage:any)=>{
      this.pages.map(menu=>{
        menu.active=menu.title===selectedPage.title;
      });
    });
    
    this.events.subscribe('capex:page', (redirectpage) => {
      let capexMenu=this.pages;
      var page=capexMenu.find(p=>p.title === redirectpage);
      this.openPage(page);
    });

    this.events.subscribe('user:login', () => {
      this.getInfo();
      let capexMenu=this.pages;
      //var page=capexMenu.find(p=>p.component === DashboardPage);
      //this.openPage(page);
      this.nav.setRoot(DashboardPage);
    });

    this.events.subscribe('user:logout', () => {
      this.storage.set('isLoggedIn', false);
      this.nav.setRoot(LoginPage);
    });
  }
  
  public openPage(page) {
    if(page.title=="Logout"){
      this.authService.logout();
    }
    else{
      this.menu.close();
      this.nav.setRoot(page.component);
      this.activePage.next(page);
    }
  }

  getInfo() {
    console.log("------------>>Load");
    Promise.all([
        this.authService.StorageGet("isLoggedIn", true).then((data:boolean) => 
            { this.hasLoggedIn = data})
        ,this.authService.StorageGet("username", null).then((data:string) => 
        {
          this.username = data;
        })
      ]).then(() => { 
            console.log("isLoggedIn------------>> "+ this.hasLoggedIn);
            console.log("username------------>> "+ this.username);
            if(this.hasLoggedIn){
              this.BUList=globalvars.businessUnitList;
              this.YearList=globalvars.yearList;
              this.selectedYear=new Date().getFullYear();
              globalvars.buInfo.BUID=this.BUID;
              globalvars.buInfo.BUName=this.BUList.filter(x => x.id== this.BUID)[0].name;
              this.avatarImgUrl =String(globalvars.avatarImgURL).replace("SGID",this.username);
           }
           else{
            this.nav.setRoot(LoginPage);
           }         
            
        });
  
  }

}

