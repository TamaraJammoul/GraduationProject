import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProfileService {

    endpointUrl = `${environment.authUrl}/user/resetPassword`;
    sessionId = localStorage.getItem('token');

    constructor(private httpClient: HttpClient) { }


    changePassword(password: string): Observable<any> {
        const id = localStorage.getItem('id');
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: new HttpParams()
                .set('id', id ? id : '')
        };
        return this.httpClient.put<any>(this.endpointUrl, { password: password }, httpOptions).pipe(
            map(data => data)
        );
    }

}
