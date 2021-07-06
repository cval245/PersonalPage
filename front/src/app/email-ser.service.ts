import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mail } from './mail.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class EmailSerService {

    baseUrl = environment.API_URL + 'email/';

    constructor(private http: HttpClient) { }

    public sendMail(mail: Mail): Observable<Mail> {
        console.log('send mail', mail, this.baseUrl)
        return this.http.post<Mail>(this.baseUrl, mail)
    }
}
