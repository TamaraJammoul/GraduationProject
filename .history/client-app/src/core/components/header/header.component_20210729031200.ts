import {  getUserClaims } from '@core/store/core.selectors';
import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BaseComponent } from '@libs/shared/components/base-component/base-component';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { TranslationService } from '@core/services/translation.service';
import { coreActions } from '@core/store/core.actions';
import { getUserEmail } from '@core/store/core.selectors';
import { filter } from 'rxjs/operators';
import { Router, ActivationStart } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent extends BaseComponent implements OnInit {

  @Input() sideContentOpened: boolean;
  appTitle: string[];
  langCtrl: FormControl;
  userEmail$: Observable<string>;
  userName: string;
  userPhoto = 'assets/icons/header/default-user.svg';
  mainLinks: any;
  userSubMenuLinks = [
    // { label: 'Profile', path: '/' },
    // { label: 'Invite users', path: '/' },
    { label: 'Log out', path: '/', action: () => this.store.dispatch(coreActions.logout())}
  ];
  constructor(private store: Store,
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef,
    private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.langCtrl = new FormControl(this.translationService.getCurrentLang());
    this.userEmail$ = this.store.pipe(
      select(getUserEmail),
      filter(email => !!email)
    );
    this.subscriptions.add(this.langCtrl.valueChanges.subscribe(value => this.translationService.use(value)));
    this.subscriptions.add(this.store.select(getUserClaims)
    .subscribe(user => (!!user) ? this.userName = `${user.givenName}  ${user.familyName}` : null));

    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart) {
        this.appTitle = [''];
        this.cdr.detectChanges();
      }
    });
  }

  logout(): void {
    this.store.dispatch(coreActions.logout());
  }

}
