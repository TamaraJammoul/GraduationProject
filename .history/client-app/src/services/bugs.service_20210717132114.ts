import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bug } from '../models/bug.model';

@Injectable({ providedIn: 'root' })
export class ErrorsService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
    };
    endpointUrl = `${environment.apiUrl}/Bugs`;

    constructor(private httpClient: HttpClient) { }
    fetchBugs(): Observable<Bug[]> {
    return this.httpClient.get<Bug[]>(this.endpointUrl, this.httpOptions).pipe(
            map(data => data)
        );
    }

    markBugAsError(bugId: string): Observable<any> {
        return this.httpClient.patch<any>(this.endpointUrl,bugId, this.httpOptions).pipe(
            map(data => data)
        );
    }
}
