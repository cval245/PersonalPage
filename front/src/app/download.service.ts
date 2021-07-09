import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DownloadService {

    baseUrl = environment.API_URL + 'resume/get-resume';

    constructor(private http: HttpClient) { }

    download(){
        return this.http.get(this.baseUrl, {
            responseType: 'blob',
        })
            }
}
