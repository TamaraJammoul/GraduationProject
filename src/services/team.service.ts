import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class TeamService {

    endpointUrl = `${environment.apiUrl}/Users`;
    authEndpointUrl = `${environment.authUrl}/user`;
    sessionId = localStorage.getItem('token');

    constructor(private httpClient: HttpClient) { }

    getTeamMembers(): Observable<User[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: new HttpParams()
                .set('sessionId', this.sessionId?this.sessionId:'')
        };
        return this.httpClient.get<User[]>(this.endpointUrl, httpOptions).pipe(
            map(data => data)
        );
    }

    addTeamMember(email: string, name: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
        };
        const body = {
            sessionId: this.sessionId?this.sessionId:'',
            email,
            name,
            phone: '0995188888',
            password: 'p@$$word123'
        }
        return this.httpClient.post<any>(`${this.authEndpointUrl}/addUser`, body, httpOptions).pipe(
            map(data => data)
        );
    }

    deleteTeamMember(userId: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: new HttpParams()
                .set('sessionId', this.sessionId?this.sessionId:'')
                .set('teamMemberId', userId)
        };
        return this.httpClient.delete<any>(`${this.authEndpointUrl}/deleteUser`, httpOptions).pipe(
            map(data => data)
        );
    }
}
