import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicStorageModule } from '@ionic/storage';
import { AuthService } from '../providers/auth-service/auth-service';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
//import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { PlanPage } from '../pages/plan/plan';
import { BudgetPage } from '../pages/budget/budget';
import { InvestmentDemandPage } from '../pages/investmentdemand/investmentdemand';
import { InvestmentDemandDetailsPage } from '../pages/IDdetails/investmentdemanddetails';
import { IDMainInfoPage } from '../pages/IDMainInfo/IDMainInfo';
import { IDFilesPage } from '../pages/IDFiles/IDFiles';
import { IDApprovalListPage } from '../pages/IDApprovalList/IDApprovalList';
import { IDPlanningDetailsPage } from '../pages/IDPlanningDetails/IDPlanningDetails';

import {SharedService} from '../shared/sharedservice';
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    //HomePage,
    DashboardPage,
    PlanPage,BudgetPage,InvestmentDemandPage,InvestmentDemandDetailsPage
    ,IDMainInfoPage,IDFilesPage,IDApprovalListPage,IDPlanningDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
<<<<<<< HEAD
    LoginPage,HomePage,
    DashboardPage,PlanPage,BudgetPage,InvestmentDemandPage,InvestmentDemandDetailsPage
    ,IDMainInfoPage,IDFilesPage,IDApprovalListPage,IDPlanningDetailsPage  
=======
    LoginPage,
    //HomePage,
    DashboardPage,PlanPage,BudgetPage,InvestmentDemandPage    
>>>>>>> d3979f33aca540807e5f9f15df65daba2f381810
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    {provide: ErrorHandler, useClass: IonicErrorHandler},SharedService
=======
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
>>>>>>> d3979f33aca540807e5f9f15df65daba2f381810
  ]
})
export class AppModule {}
