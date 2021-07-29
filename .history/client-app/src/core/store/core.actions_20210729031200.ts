import { createAction } from '@ngrx/store';
import { UserClaims } from '@core/models/user-claims.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastMessage } from '@core/models/toast-message.model';
import { AppInsightsEvent } from '@core/models/event.model';
import { AlertMessage } from '@core/models/alert-message.model';
import { idleConstants } from '@core/models/idle.constants';
import { ApplicationSettings } from '@core/models/application-settings.model';
import { BaseListingItem } from '@root/libs/shared/models/base-listing-item.models';


const toggleAuthenticationStatus = createAction('[Core] Toggle authentication status');
const initiateAuthentication = createAction('[Core] Initiate authentication');
const validateOidcCallback = createAction('[Core] Validate oidc callback');
const fetchUserClaimsSuccess = createAction('[Core] Fetch user claims success', (payload: UserClaims) => ({ payload }));
const displayHttpError = createAction('[Core] Display Http error', (httpErrorResponse: HttpErrorResponse) => ({ payload: httpErrorResponse }));
const displayNotification = createAction('[Core] Display notification', (level: string, message: string) => ({ level, message }));
const toggleBetaMode = createAction('[Core] Toggle beta mode');
const logout = createAction('[Core] Logout');
const scheduleIdleCheck = createAction('[Core] Schedule idle check', () => ({ timeBeforeIdleCheck: idleConstants.timeInMinutesBetweenIdleChecks * 60 * 1000 }));
const idleCheck = createAction('[Core] Idle check');
const hideToast = createAction('[Core] Hide toast');
const hideAlert = createAction('[Core] Hide alert');
const setAppInsightsContext = createAction('[Core] Set App Insights Context', (payload: UserClaims) => ({ payload }));

const displayToast = createAction('[Core] Display toast', (toast: ToastMessage) => ({ toast }));
const displayAlert = createAction('[Core] Display alert', (alert: AlertMessage) => ({ alert }));
const logEvent = createAction('[Core] Log event', (eventInfo: AppInsightsEvent) => ({ payload: eventInfo }));

const showSpinner = createAction('[Core] Show Spinner1', (contextId: string) => ({ contextId }));
const hideSpinner = createAction('[Core] Hide Spinner1', (contextId: string) => ({ contextId }));
const clearSpinner = createAction('[Core] Clear Spinner1');

const setAppTitle = createAction('[core] Set App Title', (title: string) => ({ title }));

const setTitleApp = createAction('[core] Set Title App', (title: string[]) => ({ title }));

const fetchApplicationSettings = createAction('[core] Fetch Application Settings');

const fetchApplicationSettingsSuccess =
  createAction('[core] Fetch Application Settings Success', (applicationSettings: ApplicationSettings) => ({ applicationSettings }));

const fetchOperatingIntermediary = createAction('[core] Fetch Operating Intermediary');

const fetchOperatingIntermediarySuccess =
  createAction('[core] Fetch Operating Intermediary Success', (payload: BaseListingItem) => ({ payload }));

export const coreActions = {
  toggleAuthenticationStatus,
  initiateAuthentication,
  validateOidcCallback,
  fetchUserClaimsSuccess,
  displayHttpError,
  displayNotification,
  toggleBetaMode,
  logout,
  scheduleIdleCheck,
  idleCheck,
  hideToast,
  hideAlert,
  setAppInsightsContext,
  showSpinner,
  hideSpinner,
  clearSpinner,
  displayToast,
  displayAlert,
  logEvent,
  setAppTitle,
  setTitleApp,
  fetchApplicationSettings,
  fetchApplicationSettingsSuccess,
  fetchOperatingIntermediary,
  fetchOperatingIntermediarySuccess
};
