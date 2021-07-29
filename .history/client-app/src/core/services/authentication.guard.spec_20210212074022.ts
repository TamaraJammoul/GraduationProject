import { AuthenticationGuard } from '@libs/core/services/authentication.guard';
import { configureTestSuite } from '@root/fakes/fakes.utils';
import { TestBed } from '@angular/core/testing';
import { FakesModule } from '@root/fakes/fakes.module';
import { AuthenticationService } from '@libs/core/services/authentication.service';
import { stub } from 'sinon';

describe(AuthenticationGuard.name, () => {
  let authGuard: AuthenticationGuard;
  let authService: AuthenticationService;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [FakesModule],
      declarations: [],
      providers: [AuthenticationGuard]
    });
  });

  beforeEach(() => {
    authGuard = TestBed.inject(AuthenticationGuard);
    authService = TestBed.inject(AuthenticationService);
  });

  it('should create', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should return true when user is authenticated', () => {
    const stubFn = stub(authService, 'isAuthenticated').callsFake(() => true);
    expect(authGuard.canLoad()).toBeTruthy();
    stubFn.restore();
  });

  it('should return false when user is not authenticated', () => {
    const stubFn = stub(authService, 'isAuthenticated').callsFake(() => false);
    expect(authGuard.canLoad()).toBeFalsy();
    stubFn.restore();
  });
});
