import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

import * as globalvars from '../global/globalVars';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  currentDocument = 0;
  recentActivities:any;
  announcementList:any;

  constructor(public navCtrl: NavController,public events: Events  ) {
     //console.log(this.globalvars.buinfo.BUName);

  }
  
  openPage(page) {
    this.events.publish('capex:page',page);
  }

  ngOnInit(){ 
    this.recentActivities = globalvars.recentActivities;
    this.announcementList = globalvars.announcementList;
  }
}
