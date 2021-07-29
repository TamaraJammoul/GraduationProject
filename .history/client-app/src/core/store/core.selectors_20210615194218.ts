import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoreState, CORE_FEATURE_NAME } from '@libs/core/store/core.state';
import { Role } from '@libs/core/models/role.enum';

const featureSelector = createFeatureSelector<CoreState>(CORE_FEATURE_NAME);

export const getUser = createSelector(featureSelector, (state) => state.user);
export const getIsUserStateFetched = createSelector(getUser, (state) => state.isFetched);

export const getIsAuthenticated = createSelector(getUser, (state) => state.isAuthenticated);
export const getUserClaims = createSelector(getUser, (state) => state.userClaims);
export const getUserEmail = createSelector(getUserClaims, (state) => state?.email);

export const getClientCode=createSelector(getUserClaims, (state) => state?.businessEntityCode);
export const getIsAVenueClient=createSelector(getUserClaims, (state) => state?.isVenueClient);
export const getIsAnOrganisationClient=createSelector(getUserClaims, (state) => state?.isOrganisationClient);

export const getIsBetaMode = createSelector(featureSelector, (state) => state.isBetaMode);

export const getUserRole = createSelector(getUserClaims, (state) => state?.roles);
export const getIsAccountManagerUser = createSelector(getUserRole, (state) => state.filter(r => r === Role.AccountManager).length > 0);
export const getIsCompanyContentManager = createSelector(getUserRole, (state) =>
    state.filter(r => r === Role.CompanyContentManager).length > 0);

// export const getIsFinancialOrSeniorOperatorUser = createSelector(getIsFinancialUser, getIsAccountManagerUser, (isFinancialOperator, isSeniorOperator) => {
//   return (isFinancialOperator || isSeniorOperator);
// });

// FERAS
export const getIsVenueAccount = createSelector(getUserClaims, (state) => state?.isVenueClient);
export const getIsOrganisationAccount = createSelector(getUserClaims, (state) => state?.isOrganisationClient);
export const getIsIntermediaryAccount = createSelector(getUserClaims, (state) => state?.isIntermediaryClient);

export const getToastMessages = createSelector(featureSelector, (state) => state.toastMessage);
export const getAlertMessages = createSelector(featureSelector, (state) => state.alertMessage);

export const getIsSpinning = createSelector(featureSelector, (state) => state.spinner.isLoading);

export const getAppTitle = createSelector(featureSelector, (state) => state.appTitle);


export const getTitleApp = createSelector(featureSelector, (state) => state.titleApp);

export const getApplicationSettings = createSelector(featureSelector, (state) => state.applicationSettings);

export const fetchOperatingIntermediary = createSelector(featureSelector, (state) => state.operatingIntermediary);
