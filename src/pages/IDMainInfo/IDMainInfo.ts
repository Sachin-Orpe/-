import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';


@Component({
            selector: 'IDMainInfo',
            templateUrl: 'IDMainInfo.html'
          })

export class IDMainInfoPage  {

mainInfoObj : any;

constructor(public params: NavParams)
{
    this.mainInfoObj = this.params.data.recordObj;
}


}