import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AlertMessage } from '@core/models/alert-message.model';
import { getAlertMessages } from '@core/store/core.selectors';
import { Observable } from 'rxjs';
import { coreActions } from '@core/store/core.actions';
import { AlertType } from '@core/models/alert-type.enum';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit {

  alertMessages$: Observable<AlertMessage>;
  closed: boolean;
  info = AlertType.Info;
  success = AlertType.Success;
  error = AlertType.Error;
  warning = AlertType.Warning;

  constructor(public store: Store) { }

  ngOnInit(): void {
    this.closed = false;
    this.alertMessages$ = this.store.select(getAlertMessages);
  }

  hide(): void {
    this.closed = true;
    this.store.dispatch(coreActions.hideAlert());
  }
}
