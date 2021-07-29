import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment } from '@angular/router';
import { AuthenticationService } from '@libs/core/services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanLoad {

  constructor(private authService: AuthenticationService) { }


  canLoad(_route: Route, _segments: UrlSegment[]): boolean {
    return this.authService.isAuthenticated();
  }
}
