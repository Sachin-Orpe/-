import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
            selector: 'plan',
            templateUrl: 'plan.html'
          })
export class PlanPage {
globalvars :any;
currentDocument = 1;

constructor(public navCtrl: NavController) {

  }
}
