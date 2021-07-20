import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Error } from '../models/error.model';

@Injectable({ providedIn: 'root' })
export class ErrorsService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
        params: new HttpParams()
            .set('PageIndex', '5d869d68-fbb9-4d07-83f9-9d0a4b487b51')
    };
    endpointUrl = `${environment.apiUrl}/Errors`;

    constructor(private httpClient: HttpClient) { }
    fetchErrors(): Observable<Error[]> {
        return this.httpClient.get<Error[]>(this.endpointUrl, this.httpOptions).pipe(
            map(data => data)
        );
    }

    deleteError(errorId: string): Observable<any> {
        return this.httpClient.patch<any>(this.endpointUrl, errorId, this.httpOptions).pipe(
            map(data => data)
        );
    }
}
