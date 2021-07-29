import { Injectable } from '@angular/core';
import {
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from '@libs/core/services/spinner.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpinnerInterceptorService implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if ((req.headers.get('process') && req.headers.get('process') === 'background')
      || req.urlWithParams.indexOf('connect/token') > 0) {
      return next.handle(req);
    }
    else {
      const timestamp = new Date().getTime().toString();
      this.showLoader(timestamp);
      return next.handle(req).pipe(finalize(() => this.onEnd(timestamp)));
    }
  }
  private onEnd(contextId: string): void {
    this.hideLoader(contextId);
  }
  private showLoader(contextId: string): void {
    this.spinnerService.startSpinning(contextId);
  }
  private hideLoader(contextId: string): void {
    this.spinnerService.stopSpinning(contextId);
  }
}
