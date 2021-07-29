/* eslint-disable  */
import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { CoreState, UserState } from '@libs/core/store/core.state';
import { coreActions } from '@libs/core/store/core.actions';
import { ToastMessage } from '@libs/core/models/toast-message.model';
import { AlertMessage } from '@libs/core/models/alert-message.model';
import { Spinner } from '@libs/core/models/spinner.model';
import { state } from '@angular/animations';
import { ApplicationSettings } from '@libs/core/models/application-settings.model';
import { BaseListingItem } from '@root/libs/shared/models/base-listing-item.models';

export const userReducer=createReducer({} as UserState,
  on(coreActions.toggleAuthenticationStatus, (state) => ({ ...state, isAuthenticated: !state.isAuthenticated })),
  on(coreActions.fetchUserClaimsSuccess, (state, { payload }) => ({ ...state, userClaims: payload, isFetched: true }))
);

export const isBetaModeReducer=createReducer(false,
  on(coreActions.toggleBetaMode, (state) => !state)
);

export const toastMessageReducer=createReducer(undefined as ToastMessage,
  on(coreActions.displayToast, (_, { toast }) => toast),
  on(coreActions.hideToast, (_) => undefined)
);

export const alertMessageReducer=createReducer(undefined as AlertMessage,
  on(coreActions.displayAlert, (_, { alert }) => alert),
  on(coreActions.hideAlert, (_) => undefined)
);

export const spinnerReducer1=createReducer(
  {
    isLoading: false,
    contextId: '',
    spinnerCount: 0
  } as Spinner,
  on(coreActions.showSpinner, (state, { contextId }) => ({ ...state, contextId, isLoading: true })),
  on(coreActions.hideSpinner, (state, { contextId }) => {
    if (contextId===state.contextId) {
      return {
        ...state,
        isLoading: false,
        contextId: null,
      };
    }
    return state;
  }),
  on(coreActions.clearSpinner, () => ({ ...state, isLoading: false, contextId: '' }))
);


export const appTitleReducer=createReducer('dashboard',
  on(coreActions.setAppTitle, (_, { title }) => title)
)


export const titleReducer = createReducer([] , 
  on(coreActions.setTitleApp, (_, {title}) => title)
  )

export const applicationSettingsReducer = createReducer({} as ApplicationSettings,
  on(coreActions.fetchApplicationSettingsSuccess, (_, { applicationSettings }) => applicationSettings)
)

export const operatingIntermediaryReducer = createReducer({} as BaseListingItem,
  on(coreActions.fetchOperatingIntermediarySuccess, (_, { payload }) => payload)
)

export const reducers: ActionReducerMap<CoreState>={
  user: userReducer,
  isBetaMode: isBetaModeReducer,
  toastMessage: toastMessageReducer,
  alertMessage: alertMessageReducer,
  spinner: spinnerReducer1,
  appTitle: appTitleReducer,
  titleApp: titleReducer,
  applicationSettings: applicationSettingsReducer,
  operatingIntermediary: operatingIntermediaryReducer
};
