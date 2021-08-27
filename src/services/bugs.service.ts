import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Bug } from '../models/bug.model';

@Injectable({ providedIn: 'root' })
export class BugsService {

    endpointUrl = `${environment.apiUrl}/Bugs`;

    constructor(private httpClient: HttpClient) { }
    fetchBugs(projectId: string): Observable<Bug[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: new HttpParams()
                .set('sessionId', JSON.stringify(localStorage.getItem('token')))
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
                .set('sessionId', JSON.stringify(localStorage.getItem('token')))
                .set('bugId', bugId)
        };
        return this.httpClient.patch<any>(this.endpointUrl, null, httpOptions).pipe(
            map(data => data)
        );
    }
}
