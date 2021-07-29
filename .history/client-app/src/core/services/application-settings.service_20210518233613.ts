import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@root/environments/environment';
import { Observable } from 'rxjs';
import { ApplicationSettings } from '@libs/core/models/application-settings.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationSettingsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };
  constructor(private httpClient: HttpClient) { }

  fetchApplicationSettings(): Observable<ApplicationSettings> {
    const endpointUrl = `${environment.apiUrl}/api/v1.0/applicationsettings`;
    return this.httpClient.get<ApplicationSettings>(endpointUrl, this.httpOptions);
  }
}
