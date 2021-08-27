import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Error } from '../models/error.model';

@Injectable({ providedIn: 'root' })
export class ErrorsService {

    endpointUrl = `${environment.apiUrl}/Errors`;
    sessionId = localStorage.getItem('token');

    constructor(private httpClient: HttpClient) { }
    fetchErrors(projectId: string): Observable<Error[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: new HttpParams()
                .set('sessionId', this.sessionId?this.sessionId:'')
                .set('projectId', projectId)
        };
        return this.httpClient.get<Error[]>(this.endpointUrl, httpOptions).pipe(
            map(data => data)
        );
    }

    deleteError(errorId: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: new HttpParams()
                .set('sessionId', this.sessionId?this.sessionId:'')
                .set('errorId', errorId)
        };
        return this.httpClient.delete<any>(this.endpointUrl, httpOptions).pipe(
            map(data => data)
        );
    }

    convertErrorToBug(errorId: string, name: string, userId: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: new HttpParams()
                .set('sessionId', this.sessionId?this.sessionId:'')
                .set('errorId', errorId)
        };
        const body = {
            name: name,
            userId: userId
        }
        return this.httpClient.patch<any>(`${this.endpointUrl}/new`, body, httpOptions).pipe(
            map(data => data)
        );
    }
}
