import { configureTestSuite } from '@root/fakes/fakes.utils';
import { TestBed } from '@angular/core/testing';
import { FakesModule } from '@root/fakes/fakes.module';
import { CanAccessFeatureGuard } from '@core/services/can-access-feature.guard';
import { stub } from 'sinon';
import { UserRightsService } from '@core/services/user-rights.service';
import { of } from 'rxjs';
import { Route, UrlTree } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { ApplicationRoutes } from '@libs/shared/settings/common.settings';

describe(CanAccessFeatureGuard.name, () => {
  let canAccessFeatureGuard: CanAccessFeatureGuard;
  let userRightsService: UserRightsService;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [FakesModule],
      declarations: [],
      providers: [CanAccessFeatureGuard, UserRightsService, provideMockStore()]
    });
  });

  beforeEach(() => {
    canAccessFeatureGuard = TestBed.inject(CanAccessFeatureGuard);
    userRightsService = TestBed.inject(UserRightsService);
  });

  it('should create', () => {
    expect(canAccessFeatureGuard).toBeTruthy();
  });

  it('should return true when can access to feature', () => {
    let result: boolean;
    const route = {
      data: {
        feature: 'feature'
      }
    } as Route;
    const stubFn = stub(userRightsService, 'canAccess').returns(of(true));
    canAccessFeatureGuard.canLoad(route).subscribe((res: boolean) => result = res);
    expect(result).toBe(true);
    stubFn.restore();
  });

  it('should return url tree when can not access to feature', () => {
    let result: UrlTree;
    const route = {
      data: {
        feature: 'feature'
      }
    } as Route;
    const stubFn = stub(userRightsService, 'canAccess').returns(of(false));
    const stubTreeFn = stub(userRightsService, 'getStartupRouteTree').returns(of(ApplicationRoutes.BookingList));
    canAccessFeatureGuard.canLoad(route).subscribe((res: UrlTree) => result = res);
    expect(result).toBeTruthy();
    stubFn.restore();
    stubTreeFn.restore();
  });

  it('should throw error when feature is not defined in route', () => {
    const route = {
      data: {}
    } as Route;
    const stubFn = stub(userRightsService, 'canAccess').returns(of(true));
    expect(() => canAccessFeatureGuard.canLoad(route)).toThrowError('Feature not defined');
    stubFn.restore();
  });
});
