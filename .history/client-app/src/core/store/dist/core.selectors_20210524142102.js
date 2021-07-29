"use strict";
exports.__esModule = true;
exports.getApplicationSettings = exports.getTitleApp = exports.getAppTitle = exports.getIsSpinning = exports.getAlertMessages = exports.getToastMessages = exports.getIsIntermediaryAccount = exports.getIsOrganisationAccount = exports.getIsVenueAccount = exports.getIsCompanyContentManager = exports.getIsAccountManagerUser = exports.getUserRole = exports.getIsBetaMode = exports.getIsAnOrganisationClient = exports.getIsAVenueClient = exports.getClientCode = exports.getUserEmail = exports.getUserClaims = exports.getIsAuthenticated = exports.getIsUserStateFetched = exports.getUser = void 0;
var store_1 = require("@ngrx/store");
var core_state_1 = require("@libs/core/store/core.state");
var role_enum_1 = require("@libs/core/models/role.enum");
var featureSelector = store_1.createFeatureSelector(core_state_1.CORE_FEATURE_NAME);
exports.getUser = store_1.createSelector(featureSelector, function (state) { return state.user; });
exports.getIsUserStateFetched = store_1.createSelector(exports.getUser, function (state) { return state.isFetched; });
exports.getIsAuthenticated = store_1.createSelector(exports.getUser, function (state) { return state.isAuthenticated; });
exports.getUserClaims = store_1.createSelector(exports.getUser, function (state) { return state.userClaims; });
exports.getUserEmail = store_1.createSelector(exports.getUserClaims, function (state) { return state === null || state === void 0 ? void 0 : state.email; });
exports.getClientCode = store_1.createSelector(exports.getUserClaims, function (state) { return state === null || state === void 0 ? void 0 : state.organisationCode; });
exports.getIsAVenueClient = store_1.createSelector(exports.getUserClaims, function (state) { return state === null || state === void 0 ? void 0 : state.isVenueClient; });
exports.getIsAnOrganisationClient = store_1.createSelector(exports.getUserClaims, function (state) { return state === null || state === void 0 ? void 0 : state.isOrganisationClient; });
exports.getIsBetaMode = store_1.createSelector(featureSelector, function (state) { return state.isBetaMode; });
exports.getUserRole = store_1.createSelector(exports.getUserClaims, function (state) { return state === null || state === void 0 ? void 0 : state.roles; });
exports.getIsAccountManagerUser = store_1.createSelector(exports.getUserRole, function (state) { return state.filter(function (r) { return r === role_enum_1.Role.AccountManager; }).length > 0; });
exports.getIsCompanyContentManager = store_1.createSelector(exports.getUserRole, function (state) {
    return state.filter(function (r) { return r === role_enum_1.Role.CompanyContentManager; }).length > 0;
});
// export const getIsFinancialOrSeniorOperatorUser = createSelector(getIsFinancialUser, getIsAccountManagerUser, (isFinancialOperator, isSeniorOperator) => {
//   return (isFinancialOperator || isSeniorOperator);
// });
// FERAS
exports.getIsVenueAccount = store_1.createSelector(exports.getUserClaims, function (state) { return state === null || state === void 0 ? void 0 : state.isVenueClient; });
exports.getIsOrganisationAccount = store_1.createSelector(exports.getUserClaims, function (state) { return state === null || state === void 0 ? void 0 : state.isOrganisationClient; });
exports.getIsIntermediaryAccount = store_1.createSelector(exports.getUserClaims, function (state) { return state === null || state === void 0 ? void 0 : state.isIntermediaryClient; });
exports.getToastMessages = store_1.createSelector(featureSelector, function (state) { return state.toastMessage; });
exports.getAlertMessages = store_1.createSelector(featureSelector, function (state) { return state.alertMessage; });
exports.getIsSpinning = store_1.createSelector(featureSelector, function (state) { return state.spinner.isLoading; });
exports.getAppTitle = store_1.createSelector(featureSelector, function (state) { return state.appTitle; });
exports.getTitleApp = store_1.createSelector(featureSelector, function (state) { return state.titleApp; });
exports.getApplicationSettings = store_1.createSelector(featureSelector, function (state) { return state.applicationSettings; });
