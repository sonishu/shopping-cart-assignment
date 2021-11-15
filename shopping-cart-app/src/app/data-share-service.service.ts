import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  constructor() { }
  shareDataSubject = new Subject<any>(); //Decalring new RxJs Subject
  
  subj$ = this.shareDataSubject.asObservable();
 
     sendDataToOtherComponent(somedata:any){
      this.shareDataSubject.next(somedata);
  }

}
