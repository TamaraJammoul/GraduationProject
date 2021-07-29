import { Action } from '@ngrx/store';
import { Observable, from, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { coreActions } from '@libs/core/store/core.actions';
import { errorCodeResponses } from '@libs/shared/settings/common.settings';


// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function catchHttpError<T>(extraFn?: (err: HttpErrorResponse) => Action): (source: Observable<T>) => Observable<T | any> {
  return source => source.pipe(
    catchError(err => {
      const errorIndex = Number.parseInt(err?.error[400][0], 10);
      if (errorCodeResponses[errorIndex]) {
        const displayNotificationAction = coreActions.displayNotification('core.errors.generalTitle', errorCodeResponses[errorIndex]);
        return extraFn ? from([displayNotificationAction, extraFn(err)]) : of(displayNotificationAction);
      } else {
        return extraFn ? from([coreActions.displayHttpError(err), extraFn(err)]) : of(coreActions.displayHttpError(err));
      }
    })
  );
}

