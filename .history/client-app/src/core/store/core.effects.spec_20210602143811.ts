/*import { CoreEffects } from '@libs/core/store/core.effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { AuthenticationService } from '@libs/core/services/authentication.service';
import { configureTestSuite } from '@root/fakes/fakes.utils';
import { TestBed } from '@angular/core/testing';
import { FakesModule } from '@root/fakes/fakes.module';
import { provideMockActions } from '@ngrx/effects/testing';
import { stub, spy } from 'sinon';
import { coreActions } from '@libs/core/store/core.actions';
import { hot, cold } from 'jasmine-marbles';
import { routerActions } from '@routing/store/router.actions';
import { ApplicationRoutes } from '@libs/shared/settings/common.settings';
import { UserClaims } from '@libs/core/models/user-claims.model';
import { NotificationsService } from '@libs/core/services/notifications.service';
import { HttpErrorResponse } from '@angular/common/http';
import { IdleService } from '@libs/core/services/idle.service';
import { provideMockStore } from '@ngrx/store/testing';
import { Role } from '@libs/core/models/role.enum';


describe(CoreEffects.name, () => {
  let actions$: Observable<Action>;
  let effects: CoreEffects;
  let authService: AuthenticationService;
  let notificationsService: NotificationsService;
  let idleService: IdleService;


  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        FakesModule,
      ],
      declarations: [],
      providers: [
        CoreEffects,
        provideMockActions(() => actions$),
        IdleService,
        provideMockStore()
      ]
    });
  });

  beforeEach(() => {
    effects = TestBed.inject(CoreEffects);
    authService = TestBed.inject(AuthenticationService);
    notificationsService = TestBed.inject(NotificationsService);
    idleService = TestBed.inject(IdleService);
  });

  it('should call validateCallback then dispatch toggleAuthenticationStatus when validateOidcCallback action is received', () => {
    const spyFn = stub(authService, 'validateCallback').callsFake(() => of(true));
    const action = coreActions.validateOidcCallback();
    actions$ = hot('--a-', { a: action });

    const toggleAuthenticationStatus = coreActions.toggleAuthenticationStatus();
    const expected = cold('--(b)', { b: toggleAuthenticationStatus });

    expect(effects.validateOidcCallback$).toBeObservable(expected);
    expect(spyFn.calledOnce).toBeTruthy();
  });

  it('should call login then dispatch go to autologin when initiateAuthentication action is received while user is not authenticated', () => {
    const isAuthStub = stub(authService, 'isAuthenticated').callsFake(() => false);
    const loginSpy = spy(authService, 'login');
    const action = coreActions.initiateAuthentication();
    actions$ = hot('--a-', { a: action });

    const goToAutoLogin = routerActions.go({ path: [ApplicationRoutes.autoLogin] });
    const expected = cold('--b-', { b: goToAutoLogin });

    expect(effects.initiateAuthentication$).toBeObservable(expected);
    expect(loginSpy.calledOnce).toBeTruthy();
    loginSpy.restore();
    isAuthStub.restore();
  });

  it('should dispatch toggleAuthenticationStatus when initiateAuthentication action is received while user is authenticated', () => {
    const isAuthStub = stub(authService, 'isAuthenticated').callsFake(() => true);
    const isRootStub = stub(authService, 'isRootRoute').callsFake(() => false);
    const action = coreActions.initiateAuthentication();
    actions$ = hot('--a-', { a: action });

    const toggleAuthenticationStatus = coreActions.toggleAuthenticationStatus();
    const expected = cold('--b-', { b: toggleAuthenticationStatus });

    expect(effects.initiateAuthentication$).toBeObservable(expected);
    isAuthStub.restore();
    isRootStub.restore();
  });

  it('should dispatch toggleAuthenticationStatus when initiateAuthentication is received and user is authenticated', () => {
    const isAuthStub = stub(authService, 'isAuthenticated').callsFake(() => true);
    const action = coreActions.initiateAuthentication();
    actions$ = hot('--a-', { a: action });


    const toggleAuthenticationStatus = coreActions.toggleAuthenticationStatus();
    const expected = cold('--(b)-', { b: toggleAuthenticationStatus });

    expect(effects.initiateAuthentication$).toBeObservable(expected);
    isAuthStub.restore();
  });

  it('should getUserClaims then dispatch fetchUserClaimsSuccess and redirect to customers if user role is SeniorOperator when toggleAuthenticationStatus is received', () => {
    const fakeUserClaims = {
      role: Role.groupManager
    } as UserClaims;
    const getUserClaimsStub = stub(authService, 'getUserClaims').callsFake(() => of(fakeUserClaims));
    const action = coreActions.toggleAuthenticationStatus();
    actions$ = hot('--a-', { a: action });

    const goToCustomers = routerActions.go({ path: [ApplicationRoutes.venuesList] });
    const logEvent = coreActions.setAppInsightsContext(fakeUserClaims);
    const fetchUserClaimsSuccess = coreActions.fetchUserClaimsSuccess(fakeUserClaims);
    const expected = cold('--(bcde)-', { b: fetchUserClaimsSuccess, c: goToCustomers, d: coreActions.scheduleIdleCheck(), e: logEvent });

    expect(effects.getUserClaims$).toBeObservable(expected);
    expect(getUserClaimsStub.calledOnce).toBeTrue();
    getUserClaimsStub.restore();
  });

  it('should getUserClaims then dispatch fetchUserClaimsSuccess and scheduleIdleCheck if url is not root when toggleAuthenticationStatus is received', () => {
    const fakeUserClaims = {
      role: Role.groupManager
    } as UserClaims;
    const getUserClaimsStub = stub(authService, 'getUserClaims').callsFake(() => of(fakeUserClaims));
    const iRootStub = stub(authService, 'isRootRoute').callsFake(() => false);
    const action = coreActions.toggleAuthenticationStatus();
    actions$ = hot('--a-', { a: action });

    const fetchUserClaimsSuccess = coreActions.fetchUserClaimsSuccess(fakeUserClaims);
    const logEvent = coreActions.setAppInsightsContext(fakeUserClaims);
    const expected = cold('--(bcd)-', { b: fetchUserClaimsSuccess, c: coreActions.scheduleIdleCheck(), d: logEvent });

    expect(effects.getUserClaims$).toBeObservable(expected);
    expect(getUserClaimsStub.calledOnce).toBeTrue();
    getUserClaimsStub.restore();
    iRootStub.restore();
  });

  it('should logout when logout action is received', () => {
    const logoutSpy = spy(authService, 'logout');
    const actionMarble = { a: coreActions.logout() };
    actions$ = hot('--a-', actionMarble);

    expect(effects.logout$).toBeObservable(cold('--a-', actionMarble));
    expect(logoutSpy.calledOnce).toBeTruthy();
    logoutSpy.restore();
  });

  it('should call notificationsService when there is an error', () => {
    const notificationsSpy = spy(notificationsService, 'openPopup');
    const actionMarble = { a: coreActions.displayHttpError({ error: 'error' } as HttpErrorResponse) };
    actions$ = hot('--a-', actionMarble);
    expect(effects.displayHttpError$).toBeObservable(cold('--a-', actionMarble));
    expect(notificationsSpy.callCount).toBe(1);
    notificationsSpy.restore();
  });

  it('should call scheduleIdleCheck when idleCheck is false', () => {
    const stubFn = stub(idleService, 'isIdle').callsFake(() => false);
    const action = coreActions.idleCheck();
    actions$ = hot('--a-', { a: action });

    const expected = cold('--(bc)-', { b: idleService.scheduleIdleCheck(), c: authService.checkAuthentication() });
    expect(effects.idleCheck$).toBeObservable(expected);
    expect(stubFn.calledOnce).toBeTrue();
    stubFn.restore();
  });

  it('should call displayIdleAlert when idleCheck is true', () => {
    const stubFn = stub(idleService, 'isIdle').callsFake(() => true);

    const action = coreActions.idleCheck();
    actions$ = hot('--a-', { a: action });
    const expectedIdleCheck = idleService.displayIdleAlert(() => idleService.scheduleIdleCheck(), () => authService.autoLogout());
    const expected = cold('--(bc)-', { b: expectedIdleCheck, c: authService.checkAuthentication() });

    expect(effects.idleCheck$).toBeObservable(expected);
    expect(stubFn.calledOnce).toBeTrue();
    stubFn.restore();
  });
});
*/
