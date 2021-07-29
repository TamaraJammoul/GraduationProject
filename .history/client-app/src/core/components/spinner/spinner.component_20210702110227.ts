import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { getIsSpinning, getUserClaims } from '@libs/core/store/core.selectors';
import { Observable } from 'rxjs';
import { Router, ActivationStart } from '@angular/router';
import { coreActions } from '@libs/core/store/core.actions';
import { UserClaims } from '@libs/core/models/user-claims.model';
import { BaseComponent } from '@libs/shared/components/base-component/base-component';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent extends BaseComponent implements OnInit{
  spinnerCount$: Observable<number>;
  isSpinning = false;
  userClaims = {} as UserClaims;
  showSpinner = true;
  routerContentHeight = '100vh';
  constructor(public store: Store,
            private router: Router,
            private cdr: ChangeDetectorRef
            ) {
              super();
            }

  ngOnInit(): void {
    this.getSpinnerHeight();
    this.router.events.subscribe(e => {
        if(e instanceof ActivationStart) {
            this.store.dispatch(coreActions.clearSpinner());
        }
    });
    this.subscriptions.add(this.store.select(getUserClaims).subscribe(
      (userClaims: UserClaims) => {
        this.userClaims = userClaims;
        this.setShowSpinner();
      }
    ));
    this.subscriptions.add(this.store.select(getIsSpinning).subscribe(
      (isSpinning: boolean) => {
        this.isSpinning = isSpinning;
        this.setShowSpinner();
      }
    ));
  }

  setShowSpinner() {
    this.showSpinner = this.isSpinning || this.isEmpty(this.userClaims);
    this.cdr.detectChanges();
  }

  getSpinnerHeight(): string {
    const windowHeight = window.outerHeight;
    const contentHeight = document.getElementsByTagName('body')[0]?.offsetHeight || 0;
    if(contentHeight > windowHeight) {
      return contentHeight + 'px';
    }
    else {
      return 100 + '%';
    }
  }
}
