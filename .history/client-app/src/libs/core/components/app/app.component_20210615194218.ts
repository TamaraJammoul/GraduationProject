import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '@libs/core/services/authentication.service';
import { coreActions } from '@libs/core/store/core.actions';
import { Store } from '@ngrx/store';
import { referenceDataActions } from '@libs/reference-data/store/reference-data.actions';
import { fetchOperatingIntermediary, getUser } from '@libs/core/store/core.selectors';
import { Router } from '@angular/router';
import { SecurityCheckerService } from '@libs/core/services/security-checker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SecurityCheckerService]
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sideNave: any;
  sideContentOpened = false;
  doesShowSideNav = true;
  constructor(private authService: AuthenticationService,
    private store: Store,
    private router: Router,
    private securityCheckService: SecurityCheckerService,
  ) { }

  ngOnInit(): void {
    this.authService.configure(
      () => this.store.dispatch(coreActions.initiateAuthentication()),
      () => this.store.dispatch(coreActions.validateOidcCallback())
    );

    this.store.select(getUser).subscribe(userState => {
      if (!!userState.userClaims) {
        this.securityCheckService.setUserClaims(userState.userClaims);
        this.store.dispatch(coreActions.fetchApplicationSettings());
        // Dispatch all reference data actions on init
        for (const [key, value] of Object.entries(referenceDataActions)) {
          if (key.indexOf('Success') === -1 && key !== 'fetchBrandsReferenceList') {
            this.store.dispatch(value());
          }
        }
        if (userState.userClaims.isOrganisationClient) {
          this.store.dispatch(coreActions.fetchOperatingIntermediary());
          this.store.select(fetchOperatingIntermediary).subscribe(operatingIntermediary => {
            this.securityCheckService.setOperatingIntermediary(operatingIntermediary);
          });
          this.router.config.unshift({
            path: '',
            loadChildren: () => import('@organizations/app.module').then((m) => m.AppModule),
          });
        }
        else if (userState.userClaims.isIntermediaryClient) {
          this.router.config.unshift({
            path: '',
            loadChildren: () => import('@intermediaries/app.module').then((m) => m.AppModule),
          });
        }
        else {
          this.router.config.unshift({
            path: '',
            loadChildren: () => import('@venues/app.module').then((m) => m.AppModule),
          });
        }
      }
    });
  }

  toggleSideContent(): void {
    this.sideContentOpened = !this.sideContentOpened;
  }

  onMenuRouteChanged(doesShowSideNav: boolean) {
    this.doesShowSideNav = doesShowSideNav;
    this.sideContentOpened = doesShowSideNav;
  }

  ngOnDestroy() {

  }
}
