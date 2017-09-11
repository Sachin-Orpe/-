import { Component } from '@angular/core';
import { NavParams,ToastController } from 'ionic-angular';

@Component({
            selector: 'iddetailspopovermenu',
            templateUrl: 'IDDetailsPopovermenu.html'    
})

export class IDDetailsPopovermenuPage {
    recordID : number;

    constructor(private navParams: NavParams,private toastCtrl: ToastController) {
     this.recordID =this.navParams.get('RecordID');     
     console.log("DetailsPopovermenu :" +String(this.recordID));
    }

    ngOnInit() {
        this.recordID =this.navParams.get('RecordID');
    }
    
    approveProject()
    {
        let toast = this.toastCtrl.create({
            message: 'Project approved successfully.',
            duration: 2000,
            position: 'top'
          });
        
          toast.onDidDismiss(() => {
            console.log('Dismissed toast');
          });
        
          toast.present();
    }
}