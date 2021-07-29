/* eslint-disable @typescript-eslint/ban-types */
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
// import { Role } from '@libs/core/models/role.enum';
import { filter, switchMap, map } from 'rxjs/operators';
import { Store, select, MemoizedSelector, DefaultProjectorFn } from '@ngrx/store';
import { Feature, ApplicationRoutes } from '@libs/shared/settings/common.settings';
import { getIsUserStateFetched, getUserRole, getIsAccountManagerUser, getIsCompanyContentManager } from '@libs/core/store/core.selectors';
import { VenueApplicationRoutes } from '@libs/shared/settings/venue.settings';
import { RolesEnum } from '@libs/core/models/enumerations/roles.enum';
@Injectable({ providedIn: 'root' })
export class UserRightsService {
  private features: { [key in Feature]: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>>; } =
    {
      [Feature.VenuesList]: getIsAccountManagerUser,
      [Feature.EditVenueInformation]: getIsCompanyContentManager,
    };

  constructor(private store: Store) { }

  canAccess(feature: Feature): Observable<boolean> {
    if (feature in this.features) {
      return this.canAccessFeature(this.features[feature]);
    }
    return of(false);
  }

  getStartupRoute(roles: string[]): string{
    if(roles.includes(RolesEnum.BookingManager)) {
      return ApplicationRoutes.Booking;
    }
    if(roles.includes(RolesEnum.AccountsManager)) {
      return ApplicationRoutes.People;
    }
    if(roles.includes(RolesEnum.ContentManager)) {
      return `${VenueApplicationRoutes.Configuration}/${VenueApplicationRoutes.VenuesList}`;
    }
    if(roles.includes(RolesEnum.EmployeesManager)) {
      return ApplicationRoutes.EmployeeList;
    }

    //Add roles for the rest of the roles
    return ApplicationRoutes.Booking;
  }

  getStartupRouteTree(): Observable<string> {
    return this.store.pipe(
      select(getUserRole),
      map(role => this.getStartupRoute(role))
    );
  }

  private canAccessFeature(selector: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>>): Observable<boolean> {
    return this.store.pipe(
      select(getIsUserStateFetched),
      filter(isFetched => !!isFetched),
      switchMap(() => this.store.select(selector))
    );
  }


}
