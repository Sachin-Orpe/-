import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

import { BudgetPage } from '../budget/budget';
import { PlanPage } from '../plan/plan';
import { InvestmentDemandPage } from '../investmentdemand/investmentdemand';


@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  currentDocument = 0;
  constructor(public navCtrl: NavController,public events: Events  ) {
     //console.log(this.globalvars.buinfo.BUName);

  }
  openPage(page) {
    this.events.publish('capex:page',page);
  }
}
