import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { coreActions } from '@libs/core/store/core.actions';
import { BaseComponent } from '@libs/shared/components/base-component/base-component';

@Component({
  selector: 'app-beta-toggle',
  templateUrl: './beta-toggle.component.html',
  styleUrls: ['./beta-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BetaToggleComponent extends BaseComponent implements OnInit {

  btnConfig = new FormControl(false);

  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions.add(this.btnConfig.valueChanges.subscribe(() => this.store.dispatch(coreActions.toggleBetaMode())));
  }

}
