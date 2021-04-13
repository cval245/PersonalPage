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
    private getServ = this.ser.asObservable();

    constructor() { }

    getSer(){
        console.log('getServ')
        return this.getServ
    }

    setSer(data: Mail){
        console.log('serSer')
        this.ser.next(data)
    }

}
