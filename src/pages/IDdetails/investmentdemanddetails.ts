import { Component,OnDestroy  } from '@angular/core';
import { NavParams,Platform,PopoverController } from 'ionic-angular';
 
//import * as globalvars from '../global/globalVars';
import { IDMainInfoPage } from '../IDMainInfo/IDMainInfo';
import { IDFilesPage } from '../IDFiles/IDFiles';
import { IDApprovalListPage } from '../IDApprovalList/IDApprovalList';
import { IDPlanningDetailsPage } from '../IDPlanningDetails/IDPlanningDetails';
import { IDDetailsPopovermenuPage } from '../IDDetailsPopoverMenu/IDDetailsPopovermenu';

import {SharedService} from '../../shared/sharedservice';
import {Subscription } from 'rxjs/Subscription';

@Component({
            selector: 'investmentdemanddetails',
            templateUrl: 'investmentdemanddetails.html'            
          })

export class InvestmentDemandDetailsPage implements OnDestroy {

subscription: Subscription;
RecordObj:any;
documentCount : number = 9;
tabPage1:any;
tabPage2:any;
tabPage3:any;
tabPage4:any;

    constructor(public params: NavParams,platform: Platform,private ss: SharedService,public popoverCtrl: PopoverController)
    {
        this.RecordObj=this.params.data;
        this.tabPage1 = IDMainInfoPage;
        this.tabPage2 = IDFilesPage;
        this.tabPage3 = IDPlanningDetailsPage;
        this.tabPage4 = IDApprovalListPage;
        //this.documentCount = documentCount;
        this.subscription = this.ss.notifyObservable$.subscribe((res)=> {this.documentCount = res;} );
        console.log(this.documentCount);
    }


ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  presentPopover(ev) {

    let popover = this.popoverCtrl.create(IDDetailsPopovermenuPage, {
       RecordID: this.RecordObj.ID     
    });

    popover.present({
      ev: ev
    });
  }
}


