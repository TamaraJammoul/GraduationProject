import { Injectable } from '@angular/core';
import {
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { SnackBarNotificationService } from '@core/services/snackbar-notification.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuccessMessageInterceptorService implements HttpInterceptor {
  constructor(
    private snackBarNotificationService: SnackBarNotificationService
  ) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {

        if (req.urlWithParams.indexOf('connect/token') > -1) {
          return event;
        }

        if (event instanceof HttpResponse) {
          if (this.doesShowSuccessMessage(req, event)) {
            this.showSuccessMessage();
          }
        }
        return event;
      })
    );
  }

  doesShowSuccessMessage(req: HttpRequest<any>, res: HttpResponse<any>): boolean {
    if (req.headers.get('process') && req.headers.get('process') === 'background') {
      return false;
    }
    if (req.url.indexOf('connect/token') > -1) {
      return false;
    }
    if (req.method !== 'GET' && res.status === 200) {
      return true;
    }
    return false;
  }

  showSuccessMessage() {
    this.snackBarNotificationService.success('core.message', 'top', 'right');
  }
}
