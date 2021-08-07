import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Bug } from '../models/bug.model';

@Injectable({ providedIn: 'root' })
export class BugsService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
        params: new HttpParams()
        .set('sessionId', '5d869d68-fbb9-4d07-83f9-9d0a4b487b51')
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
