import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';


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
