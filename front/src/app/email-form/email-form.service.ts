import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Mail } from '../mail.model';

@Injectable({
  providedIn: 'root'
})
export class EmailFormService {

    // Create Subject
    private ser = new Subject();
    // as observable
    //private getServ = this.ser.asObservable();

    constructor() { }

    getSer(){
        console.log('getServ')
        //console.log('gggg', this.getServ.subscribe(x => console.log("cccc",  x)))
        //return this.getServ
        return this.ser
    }

    setSer(data: Mail){
        console.log('serSer')
        this.ser.next(data)
    }

}
