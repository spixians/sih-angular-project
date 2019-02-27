import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Comments} from '../classes/comments';

@Injectable()
export class freeApiService{

    constructor(private httpclient : HttpClient) {}


getcomments(): Observable<any> {
   return this.httpclient.get("http://localhost:3000/api/PO2");

   
}

post(opost:Comments): Observable<any> {
    return this.httpclient.post("http://localhost:3000/api/PO2",opost);
}


}