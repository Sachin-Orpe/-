import { Component } from '@angular/core';
import { NavController,MenuController  } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';
import { PlanPage } from '../plan/plan';
import { BudgetPage } from '../budget/budget';
import { InvestmentDemandPage } from '../investmentdemand/investmentdemand';

import * as globalvars from '../global/globalVars';
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})

export class HomePage {
rootPage1 = DashboardPage;

pages: Array<{title: string, component: any}>;
BUList:Array<{id:number,name:string}>;
BUDetails : any;
BUName:string;
selectedYear: number;
YearList :any=[];
currentDocument :number;
BUID: number = 1;
  constructor(public navCtrl: NavController, menu: MenuController) {
    this.BUList=[
      {id:1,name:'CMA'},
      {id:3,name:'Adfors'},
      {id:5,name:'Sekruit'},      
      {id:10,name:'Mortars'},
      {id:11,name:'Pipe'}
    ];    
    this.pages = [
      { title: 'Dashboard', component: DashboardPage },
      { title: 'Plan', component: PlanPage },
      { title: 'Budget', component: BudgetPage },
      { title: 'Investment Demand', component: InvestmentDemandPage }
    ];
    menu.enable(true);
    this.YearList=globalvars.yearList;
     this.selectedYear=new Date().getFullYear();
   globalvars.buInfo.BUID=this.BUID;
   globalvars.buInfo.BUName=this.BUList.filter(x => x.id== this.BUID)[0].name;
   this.currentDocument=0;
  }

 goToPage(ID){
   this.BUName= this.BUList.filter(x => x.id== this.BUID)[0].name;   
   globalvars.buInfo.BUID=this.BUID;
   globalvars.buInfo.BUName=this.BUName;
   this.currentDocument = ID;
   console.log(globalvars.buInfo.BUID+" - "+globalvars.buInfo.BUName);
      switch(ID) {
       case 1: {
          //statements;
          this.rootPage1 = PlanPage;
          break;
       }
       case 2: {
          //statements;
          this.rootPage1 = BudgetPage;
          break;
       }
       case 3: {
             //statements;
             this.rootPage1 = InvestmentDemandPage;
             break;
          }
            case 4: {
             //statements;
             this.rootPage1 = InvestmentDemandPage;
             break;
          }
            case 5: {
             //statements;
            this.navCtrl.pop();
             break;
          }
       default: {
          //statements;
          this.rootPage1 = DashboardPage;
          break;
       }
    }

  }

}
