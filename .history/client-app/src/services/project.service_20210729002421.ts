import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Project } from '../models/project.model';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {

    endpointUrl = `${environment.apiUrl}/Projects`;

    constructor(private httpClient: HttpClient) { }

    getProjects(): Observable<Project[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: new HttpParams()
                .set('sessionId', '5d869d68-fbb9-4d07-83f9-9d0a4b487b51')
        };
        return this.httpClient.get<Project[]>(this.endpointUrl, httpOptions).pipe(
            map(data => data)
        );
    }

    addProject(name: String): Observable<Project> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: new HttpParams()
                .set('sessionId', '5d869d68-fbb9-4d07-83f9-9d0a4b487b51')
        };
        return this.httpClient.post<Project>(this.endpointUrl, name, httpOptions).pipe(
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

    addProjectMember(userId: string, projectId: string): Observable<User> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: new HttpParams()
                .set('sessionId', '5d869d68-fbb9-4d07-83f9-9d0a4b487b51')
                .set('projectId', projectId)
                .set('userId', userId)
        };
        return this.httpClient.post<User>(`${this.endpointUrl}/users`, httpOptions).pipe(
            map(data => data)
        );
    }

    deleteProjectMember(userId: string, projectId: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: new HttpParams()
                .set('sessionId', '5d869d68-fbb9-4d07-83f9-9d0a4b487b51')
                .set('userId', userId)
                .set('projectId', projectId)
        };
        return this.httpClient.delete<any>(`${this.endpointUrl}/users`, httpOptions).pipe(
            map(data => data)
        );
    }


    renameProjectMember(projectId: string, projectName: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: new HttpParams()
                .set('sessionId', '5d869d68-fbb9-4d07-83f9-9d0a4b487b51')
                .set('projectId', projectId)
                .set('name', projectName)
        };
        return this.httpClient.patch<any>(this.endpointUrl, httpOptions);
    }
}
