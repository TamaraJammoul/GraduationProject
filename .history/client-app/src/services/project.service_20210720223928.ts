import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Error } from '../models/error.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {

    endpointUrl = `${environment.apiUrl}/Errors`;

    constructor(private httpClient: HttpClient) { }
    addProject(name: String): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: new HttpParams()
                .set('sessionId', '5d869d68-fbb9-4d07-83f9-9d0a4b487b51')
        };
        return this.httpClient.post<any>(this.endpointUrl, name, httpOptions).pipe(
            map(data => data)
        );
    }

    deleteProject(projectId: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: new HttpParams()
                .set('sessionId', '5d869d68-fbb9-4d07-83f9-9d0a4b487b51')
                .set('projectId', projectId)
        };
        return this.httpClient.delete<any>(this.endpointUrl, httpOptions).pipe(
            map(data => data)
        );
    }

    addProjectMember(memberEmail: String): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: new HttpParams()
                .set('sessionId', '5d869d68-fbb9-4d07-83f9-9d0a4b487b51')
        };
        return this.httpClient.post<any>(this.endpointUrl, memberEmail, httpOptions).pipe(
            map(data => data)
        );
    }

    deleteProjectMember(memberEmail: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: new HttpParams()
                .set('sessionId', '5d869d68-fbb9-4d07-83f9-9d0a4b487b51')
                .set('memberEmail', memberEmail)
        };
        return this.httpClient.delete<any>(this.endpointUrl, httpOptions).pipe(
            map(data => data)
        );
    }
}
