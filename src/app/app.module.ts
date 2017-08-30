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


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    //HomePage,
    DashboardPage,
    PlanPage,BudgetPage,InvestmentDemandPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    //HomePage,
    DashboardPage,PlanPage,BudgetPage,InvestmentDemandPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
