import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { coreActions } from '../../store/core.actions';
import { Store } from '@ngrx/store';
import { fetchOperatingIntermediary, getUser } from '../../store/core.selectors';
import { Router } from '@angular/router';
import { SecurityCheckerService } from '../../services/security-checker.service';

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
