import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Signup } from '../models/signup.model';
import { Login } from '../models/login.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        }),
    };

    constructor(private httpClient: HttpClient) { }
    signUp(info: Signup): Observable<any> {
        const endpointUrl = `${environment.authUrl}/signup`;
        return this.httpClient.post<any>(endpointUrl, info, this.httpOptions).pipe(
            map(data => data)
        );
    }

    login(info: Login): Observable<any> {
        const endpointUrl = `${environment.authUrl}/login`;
        return this.httpClient.post<any>(endpointUrl, info, this.httpOptions).pipe(
            map(data => data)
        );
    }
}
