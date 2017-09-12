import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';

import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginModel } from '../../interfaces/LoginModel';

@Injectable()
export class AuthService {
  credentials: LoginModel = { username: '', password: '' };
  isLoggedIn : 'isLoggedIn';

  constructor(
    public events: Events,
    public storage: Storage
  ) { }

  login(credentials) {
    if(credentials.password==123){
      this.storage.ready().then(() => {       
        this.storage.set('isLoggedIn', true);
        this.setUsername(credentials.SGID);
        console.log('done');
      });      
      console.log('set');
      return true;
    }
    else{
      return false;
    }
  };

  logout(){
    this.storage.set('isLoggedIn', false);
    this.storage.remove(this.isLoggedIn);
    this.storage.remove('username');
    this.events.publish('user:logout');
  };

  setUsername(username: string): void {
    this.storage.set('username', username);
  };
  
  StorageGet(Key: string, Default: any): any {
    return new Promise((resolve, reject) => {
      this.storage.get(Key).then((data) => {
          console.log(Key + "<<------------Storage.get ", Key, data);
          resolve(data);
      })
      .catch(() => {
        console.log("UserOptionsService------------>>Load DEFAULTS", Default);
        resolve(Default);
      });
          
     });   
   }
}
