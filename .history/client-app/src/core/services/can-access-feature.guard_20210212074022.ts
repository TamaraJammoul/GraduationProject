import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserRightsService } from '@libs/core/services/user-rights.service';
import { first, switchMap, map } from 'rxjs/operators';
import { Feature } from '@libs/shared/settings/common.settings';

@Injectable({ providedIn: 'root' })
export class CanAccessFeatureGuard implements CanLoad {

  constructor(private userRightsService: UserRightsService, private router: Router) { }

  canLoad(route: Route): Observable<boolean | UrlTree> {
    const feature = route.data.feature as Feature;
    if (!feature) {
      throw new Error('Feature not defined');
    }
    return this.userRightsService.canAccess(feature).pipe(
      first(),
      switchMap(canAccess => canAccess ? of(canAccess) : this.getStartupUrlTree())
    );
  }

  private getStartupUrlTree(): Observable<UrlTree> {
    return this.userRightsService.getStartupRouteTree().pipe(
      map(route => this.router.parseUrl(route))
    );
  }
}
