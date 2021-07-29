import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { coreActions } from '@core/store/core.actions';
import { AuthenticationService } from '@core/services/authentication.service';
import { concatMap, switchMap, map, tap, delay } from 'rxjs/operators';
import { MonitoringService } from '@root/monitoring/monitoring.service';
import { of } from 'rxjs';
import { IdleService } from '@core/services/idle.service';
import { UserRightsService } from '@core/services/user-rights.service';
import { SnackBarNotificationService } from '@core/services/snackbar-notification.service';
import { ApplicationSettingsService } from '@core/services/application-settings.service';
import { catchHttpError } from '@root/custom/custom.pipeables';
import { BusinessRelationsService } from '../services/business-relations.service';
@Injectable()
export class CoreEffects {

  validateOidcCallback$ = createEffect(() => this.actions$.pipe(
    ofType(coreActions.validateOidcCallback),
    switchMap(() => this.authService.validateCallback()),
    map(() => coreActions.toggleAuthenticationStatus())
  ));
  
  logout$ = createEffect(() => this.actions$.pipe(
    ofType(coreActions.logout),
    tap(() => this.authService.logout()),
  ), { dispatch: false });



  scheduleIdleCheck$ = createEffect(() => this.actions$.pipe(
    ofType(coreActions.scheduleIdleCheck),
    switchMap(({ timeBeforeIdleCheck }) => of(timeBeforeIdleCheck).pipe(delay(timeBeforeIdleCheck))),
    map(() => coreActions.idleCheck())
  ));

  logEvent$ = createEffect(() => this.actions$.pipe(
    ofType(coreActions.logEvent),
    tap(({ payload }) => this.monitoringService.logEvent(
      `${payload.event}: ${payload.identifier}`,
      payload.properties)),
  ), { dispatch: false });

  setAppInsightsSecurityContext$ = createEffect(() => this.actions$.pipe(
    ofType(coreActions.setAppInsightsContext),
    tap((claims) => this.monitoringService.setSecurityContext(claims.payload.email)),
  ), { dispatch: false });

  displayHttpError$ = createEffect(() => this.actions$.pipe(
    ofType(coreActions.displayHttpError),
    tap(({ payload }) => this.monitoringService.logException(payload.error, payload.status >= 500 ? 'Backend' : 'Frontend')),
    tap(({ payload }) => this.snackbarService.error(payload.message)),
  ), { dispatch: false });

  displayNotification$ = createEffect(() => this.actions$.pipe(
    ofType(coreActions.displayNotification),
    tap(({ message }) => this.snackbarService.error(message)),
  ), { dispatch: false });

  idleCheck$ = createEffect(() => this.actions$.pipe(
    ofType(coreActions.idleCheck),
    concatMap(() =>
      [
        this.idleService.isIdle() ?
          this.idleService.displayIdleAlert(() => this.idleService.scheduleIdleCheck(), () => this.authService.autoLogout())
          : this.idleService.scheduleIdleCheck(),
        this.authService.checkAuthentication()
      ])
  ), { dispatch: false });

  fetchApplicationSetting$ = createEffect(() =>
    this.actions$.pipe(
      ofType(coreActions.fetchApplicationSettings),
      switchMap(() => (
        this.applicationSettingsService.fetchApplicationSettings().pipe(
          map((result) => coreActions.fetchApplicationSettingsSuccess(result),
            catchHttpError()
          )
        )
      ))
    )
  );

  fetchOperatingIntermediary$ = createEffect(() =>
    this.actions$.pipe(
      ofType(coreActions.fetchOperatingIntermediary),
      switchMap(() => (
        this.businessRelationsService.fetchOperatingIntermediary().pipe(
          map((result) => coreActions.fetchOperatingIntermediarySuccess(result),
            catchHttpError()
          )
        )
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthenticationService,
    private monitoringService: MonitoringService,
    // private notificationService: NotificationsService,
    private snackbarService: SnackBarNotificationService,
    private idleService: IdleService,
    private userRightsService: UserRightsService,
    private applicationSettingsService: ApplicationSettingsService,
    private businessRelationsService: BusinessRelationsService
  ) {
  }
}
