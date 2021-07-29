import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Injectable, Inject } from '@angular/core';
import { environment } from '@root/environments/environment';
import { UserClaims } from '@libs/core/models/user-claims.model';
import { WINDOW_REF } from '@libs/shared/settings/common.settings';
import { ApplicationRoutes } from '@libs/shared/settings/common.settings';
import { AuthConfig, OAuthService, NullValidationHandler } from 'angular-oauth2-oidc';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private oauthService: OAuthService, private location: Location, @Inject(WINDOW_REF) private winRef: any) {
    // TO KEEP FOR FUTURE DEBUG
    // this.oauthService.events.subscribe(event => console.log(event));
  }

  logout(): void {
    this.oauthService.logOut();
  }

  autoLogout(): void {
    this.oauthService.stopAutomaticRefresh();
    this.oauthService.logOut({ autologout: true });
  }

  configure(initiateAuthenticationFn: () => void, validateOidcCallbackFn: () => void): void {
    this.oauthService.configure(this.getAuthCodeFlowConfig());
    this.oauthService.setupAutomaticSilentRefresh({}, 'access_token');
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.loadDiscoveryDocument().then(() =>
      this.isOidcCallback() ? validateOidcCallbackFn() : initiateAuthenticationFn()
    );
  }

  isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  checkAuthentication(): void {
    if (!this.isAuthenticated()) {
      this.autoLogout();
    }
  }

  isRootRoute(): boolean {
    return this.location.path() === ApplicationRoutes.Root || this.location.path() === '';
  }

  validateCallback(): Observable<boolean> {
    return from(this.oauthService.tryLoginCodeFlow().then(() => true));
  }

  login(): void {
    this.oauthService.initCodeFlow();
  }

  getUserClaims(): Observable<UserClaims> {
    return from(this.oauthService.loadUserProfile())
      .pipe(
        map(({ email, roles, permissions, features,
          business_entity_code, business_entity_type, business_entity_subtype, given_name, family_name }) => (
          {
            email,
            roles,
            permissions,
            features,
            businessEntityCode: business_entity_code,
            businessEntityType: business_entity_type,
            businessEntitySubType: business_entity_subtype,
            isVenueClient: business_entity_type === 'Company',
            isOrganisationClient: business_entity_type === 'Organisation',
            isIntermediaryClient: business_entity_type === 'Intermediary',
            isWizmeUser: business_entity_type === 'wizme',
            givenName: given_name,
            familyName: family_name
          }
        ) as UserClaims)
      );
  }

  private isOidcCallback(): boolean {
    return this.winRef.location.search.startsWith('?code');
  }

  private getAuthCodeFlowConfig(): AuthConfig {
    return {
      issuer: environment.stsServerUrl,
      redirectUri: `${this.winRef.location.origin}`,
      clientId: 'WizmeApps.Venues',
      responseType: 'code',
      scope: 'openid profile offline_access venues_api client_user_profile',
      postLogoutRedirectUri: `${this.winRef.location.origin}`,
      showDebugInformation: false,
      sessionChecksEnabled: true
    };
  }
}
