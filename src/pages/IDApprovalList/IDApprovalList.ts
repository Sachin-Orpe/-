import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';


@Component({
            selector: 'idapprovallist',
            templateUrl: 'IDApprovalList.html'
          })

export class IDApprovalListPage {

mainInfoObj : any;

constructor(public params: NavParams)
{
    this.mainInfoObj = this.params.data
}

}