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
            'Content-Type': 'application/json'
        }),
    };
    endpointUrl = `${environment.apiUrl}/api/v1.0/companies`;

    constructor(private httpClient: HttpClient) { }
    signUp(info: Signup): Observable<any> {
        return this.httpClient.post<any>(this.endpointUrl,info, this.httpOptions).pipe(
            map(data => data)
        );
    }

    login(info: Login): Observable<any> {
        return this.httpClient.post<any>(this.endpointUrl,info, this.httpOptions).pipe(
            map(data => data)
        );
    }
}
