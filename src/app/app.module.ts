import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicStorageModule } from '@ionic/storage';
import { AuthService } from '../providers/auth-service/auth-service';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SplashPage } from '../pages/splash/splash';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { PlanPage } from '../pages/plan/plan';
import { BudgetPage } from '../pages/budget/budget';
import { InvestmentDemandPage } from '../pages/investmentdemand/investmentdemand';
import { InvestmentDemandDetailsPage } from '../pages/IDdetails/investmentdemanddetails';
import { IDMainInfoPage } from '../pages/IDMainInfo/IDMainInfo';
import { IDFilesPage } from '../pages/IDFiles/IDFiles';
import { IDApprovalListPage } from '../pages/IDApprovalList/IDApprovalList';
import { IDPlanningDetailsPage } from '../pages/IDPlanningDetails/IDPlanningDetails';
import { IDDetailsPopovermenuPage } from '../pages/IDDetailsPopoverMenu/IDDetailsPopovermenu';

import {SharedService} from '../shared/sharedservice';

import { StringToDatePipe } from '../Pipe/stringTodate';
import { ListAvtarName } from  '../Pipe/listAvatarName';

@NgModule({
  declarations: [
    MyApp,
    SplashPage,
    LoginPage,    
    DashboardPage,
    PlanPage,BudgetPage,InvestmentDemandPage,InvestmentDemandDetailsPage,
    IDMainInfoPage,IDFilesPage,IDApprovalListPage,IDPlanningDetailsPage,
    IDDetailsPopovermenuPage,
    StringToDatePipe,ListAvtarName
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SplashPage,
    LoginPage,
    DashboardPage,PlanPage,BudgetPage,InvestmentDemandPage,InvestmentDemandDetailsPage,
    IDMainInfoPage,IDFilesPage,IDApprovalListPage,IDPlanningDetailsPage,IDDetailsPopovermenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,SharedService
  ]
})
export class AppModule {}
