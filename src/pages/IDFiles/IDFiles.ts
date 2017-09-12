import { Component } from '@angular/core';
import { NavParams,AlertController } from 'ionic-angular';

import {Subscription } from 'rxjs/Subscription';
import {SharedService} from '../../shared/sharedservice';

@Component({
            selector: 'idfiles',
            templateUrl: 'IDFiles.html',
            providers : [SharedService]
          })

export class IDFilesPage {
subscription:Subscription;
fileHeader : any;
mainInfoObj : any;
docCount :number;
t:any;
    constructor(public params: NavParams,private ss:SharedService,public alertCtrl: AlertController)
    {
        this.mainInfoObj = this.params.data;
        this.fileHeader=[{"Sequence":1,"DocumentFileType":"Investment Demand/DAC","SystemFileType":false,"IsMandatory":false},{"Sequence":2,"DocumentFileType":"Pay Back Calculation","SystemFileType":false,"IsMandatory":false},{"Sequence":3,"DocumentFileType":"Spec and Commissiong","SystemFileType":false,"IsMandatory":false},{"Sequence":4,"DocumentFileType":"Lay Out","SystemFileType":false,"IsMandatory":false},{"Sequence":5,"DocumentFileType":"Offers","SystemFileType":false,"IsMandatory":false},{"Sequence":6,"DocumentFileType":"Supplier Comparison","SystemFileType":false,"IsMandatory":false},{"Sequence":7,"DocumentFileType":"Purchasing Order","SystemFileType":false,"IsMandatory":false}];
        this.subscription = this.ss.notifyObservable$.subscribe((res)=> {this.docCount = res;} );
        console.log(this.docCount);
    }

    addFile(){
        this.docCount= 8;
        this.ss.notifyOther(this.docCount);
        this.ss.notifyObservable$.subscribe((res)=> {this.t = res;} );
        console.log(this.t);
    }

    startDownload(){
        let alert = this.alertCtrl.create({
            title: '',
            subTitle: 'Download File',
            buttons: ['OK']
          });
          alert.present();

    }
}