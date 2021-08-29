import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Bug } from '../models/bug.model';

@Injectable({ providedIn: 'root' })
export class BugsService {

    endpointUrl = `${environment.apiUrl}/Bugs`;
    sessionId = localStorage.getItem('token');

    constructor(private httpClient: HttpClient) { }
    fetchBugs(projectId: string): Observable<Bug[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: new HttpParams()
                .set('sessionId', this.sessionId?this.sessionId:'')
                .set('projectId', projectId)
        };
        return this.httpClient.get<Bug[]>(this.endpointUrl, httpOptions).pipe(
            map(data => data)
        );
    }

    markBugAsError(bugId: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: new HttpParams()
                .set('sessionId', this.sessionId?this.sessionId:'')
                .set('bugId', bugId)
        };
        return this.httpClient.patch<any>(this.endpointUrl, null, httpOptions).pipe(
            map(data => data)
        );
    }

    declineBug(bugId: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: new HttpParams()
                .set('sessionId', this.sessionId?this.sessionId:'')
                .set('bugId', bugId)
        };
        return this.httpClient.patch<any>(`${this.endpointUrl}/return`, null, httpOptions).pipe(
            map(data => data)
        );
    }
}
