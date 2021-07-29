import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastMessage } from '@core/models/toast-message.model';
import { getToastMessages } from '@core/store/core.selectors';
import { Observable } from 'rxjs';
import { coreActions } from '@core/store/core.actions';
import { ToastType } from '@core/models/toast-type.enum';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent implements OnInit {
  toastMessages$: Observable<ToastMessage>;
  message = ToastType.Message;
  info = ToastType.Info;
  success = ToastType.Success;
  error = ToastType.Error;

  constructor(public store: Store) { }

  ngOnInit(): void {
    this.toastMessages$ = this.store.select(getToastMessages);
  }

  hide(): void {
    this.store.dispatch(coreActions.hideToast());
  }
}
