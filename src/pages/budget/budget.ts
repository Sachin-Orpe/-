import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
            selector: 'budget',
            templateUrl: 'budget.html'
          })
export class BudgetPage {
  globalvars : any;
  currentDocument = 2;

constructor(public navCtrl: NavController) {
    

  }

}
