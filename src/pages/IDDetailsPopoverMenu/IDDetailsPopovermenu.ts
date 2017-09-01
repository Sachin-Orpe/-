import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
            selector: 'iddetailspopovermenu',
            templateUrl: 'IDDetailsPopovermenu.html'    
})

export class IDDetailsPopovermenuPage {
    recordID : number;

    constructor(private navParams: NavParams) {
     this.recordID =this.navParams.get('RecordID');     
    }

    ngOnInit() {
        this.recordID =this.navParams.get('RecordID');
    }

}