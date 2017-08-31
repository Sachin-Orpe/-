import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import * as globalvars from '../global/globalVars';
@Component({
            selector: 'idplanningdetails',
            templateUrl: 'IDPlannigDetails.html'
          })

export class IDPlanningDetailsPage  {
planningYearList :number[];
monthList :any;
mainInfoObj : any;
planningDetails : any;
    constructor(public params: NavParams)
    {
        this.mainInfoObj = this.params.data.recordObj;
        this.planningYearList=globalvars.getPlanningYear();
        this.monthList=globalvars.getMonthList();
        this.planningDetails=[{"InvestmentDemandID":7510,"PODetailsID":26,"Name":"Investment Validation","Months":1,"Years":2017,"SrlNo":1},{"InvestmentDemandID":7510,"PODetailsID":27,"Name":"Purchase Order","Months":3,"Years":2017,"SrlNo":2},{"InvestmentDemandID":7510,"PODetailsID":28,"Name":"Design Validation","Months":5,"Years":2017,"SrlNo":3},{"InvestmentDemandID":7510,"PODetailsID":30,"Name":"Industrial Acceptance","Months":7,"Years":2017,"SrlNo":4},{"InvestmentDemandID":7510,"PODetailsID":29,"Name":"Pre-Acceptance","Months":9,"Years":2017,"SrlNo":5},{"InvestmentDemandID":7510,"PODetailsID":31,"Name":"Final Acceptance","Months":11,"Years":2017,"SrlNo":6},{"InvestmentDemandID":7510,"PODetailsID":32,"Name":"End of Project","Months":2,"Years":2018,"SrlNo":7}];
    }
    getMonth(month){
        if(month > 0)
            {
              return this.monthList.filter(a=> a.id == month)[0].Name;
            }
        else{
              return "";
        }
    }

}