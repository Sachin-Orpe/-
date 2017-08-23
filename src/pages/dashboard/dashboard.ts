import { Component } from '@angular/core';
import { NavController  } from 'ionic-angular';


@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  currentDocument = 0;
  constructor(public navCtrl: NavController  ) {
     //console.log(this.globalvars.buinfo.BUName);

  }


}
