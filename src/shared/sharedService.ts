import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class SharedService {
  private notify = new Subject<number>();
  /**
   * Observable string streams
   */
  notifyObservable$ = this.notify.asObservable();

  constructor(){
    
  }

  public notifyOther(data: number) {
    if (data) {
      this.notify.next(data);
    }
  }
}