import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mail } from './mail.model';

@Injectable({
  providedIn: 'root'
})

export class EmailSerService {

    baseUrl = `http://127.0.0.1:8000/email/`;

    constructor(private http: HttpClient) { }

    public sendMail(mail: Mail): Observable<Mail> {
        console.log('send mail', mail, this.baseUrl)
        this.http.get('http://localhost:8000/email/')
        return this.http.post<Mail>(this.baseUrl, mail)
    }
}
