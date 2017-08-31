import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Subject } from 'rxjs';

import { Storage } from '@ionic/storage';
import * as globalvars from '../pages/global/globalVars';
import { MenuModel } from '../interfaces/MenuModel';
import { AuthService } from '../providers/auth-service/auth-service'

import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { BudgetPage } from '../pages/budget/budget';
import { PlanPage } from '../pages/plan/plan';
import { InvestmentDemandPage } from '../pages/investmentdemand/investmentdemand';
// import { InvestmentDemandDetailsPage } from '../pages/IDdetails/investmentdemanddetails';
// import { IDFilesPage } from '../pages/IDFiles/IDFiles';
// import { IDPlanningDetailsPage } from '../pages/IDPlanningDetails/IDPlanningDetails';
// import { IDApprovalListPage } from '../pages/IDApprovalList/IDApprovalList';




@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;  
  rootPage = DashboardPage;
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
  username:string;
  BUName:string;
  BUID: number = 1;
  BUList:Array<{id:number,name:string}>;
  BUDetails : any;
  selectedYear: number;
  YearList :any=[];
  currentDocument :number;
  isshowMenu:boolean;
  
  constructor( public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public events: Events,
    public storage: Storage,
    public authService: AuthService
  ) {
     
      this.initializeApp();
      this.listenToLoginEvents();
      this.getInfo();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
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
      var page=capexMenu.find(p=>p.component === DashboardPage);
      this.openPage(page);
      
    });

    this.events.subscribe('user:logout', () => {
      this.storage.set('isLoggedIn', false);
      this.isshowMenu=false;
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
              this.isshowMenu=true;
              this.BUList=globalvars.businessUnitList;
              this.YearList=globalvars.yearList;
              this.selectedYear=new Date().getFullYear();
              globalvars.buInfo.BUID=this.BUID;
              globalvars.buInfo.BUName=this.BUList.filter(x => x.id== this.BUID)[0].name;
           }
           else{
            this.nav.setRoot(LoginPage);
           }         
            
        });
   
  
  }

  ngOnInit (){
      
  }
  
}

