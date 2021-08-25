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

    constructor(private httpClient: HttpClient) { }

    getTeamMembers(): Observable<User[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: new HttpParams()
                .set('sessionId', '5d869d68-fbb9-4d07-83f9-9d0a4b487b51')
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
            sessionId: '5d869d68-fbb9-4d07-83f9-9d0a4b487b51',
            email,
            name,
            phone: '09951516896',
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
                .set('sessionId', '5d869d68-fbb9-4d07-83f9-9d0a4b487b51')
                .set('teamMemberId', userId)
        };
        return this.httpClient.delete<any>(`${this.authEndpointUrl}/deleteUser`, httpOptions).pipe(
            map(data => data)
        );
    }
}