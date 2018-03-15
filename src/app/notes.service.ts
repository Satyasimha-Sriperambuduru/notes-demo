import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { NotesRes } from './notesres';


@Injectable()
export class notes_service{

    constructor(public http: HttpClient) { }
    public getNotesByPrcsInstncID():Observable<NotesRes>{
    let username: string = 'ESB';
    let password: string = 'BdL5C35jwNC2K6Vs';
    let headers = new HttpHeaders().set(
      'Authorization', 'Basic ' + btoa(username + ":" + password
      ));
      
    headers = headers.append('Access-Control-Allow-Origin', 'https://titand.dexmedia.com');
    headers = headers.append('Access-Control-Allow-Credentials', 'true');
    headers = headers.append('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');

    return this.http.get<NotesRes>('https://titand.dexmedia.com/common/retrievenotes/productinstanceid/1173', {headers: headers})
    .map(res => res
)
    }
}