import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    CanLoad
} from '@angular/router';
import {Store} from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap, take, switchMap } from 'rxjs/operators';
import { isUserAuth } from '../store/app.selector';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad{
    constructor(private router: Router, private store$: Store) { }
    canActivate(): Observable<boolean> | boolean {
        return this.isAllowedVisiting();
    }
    canLoad() {
        return this.isAllowedVisiting();
    }

    isAllowedVisiting() {
        return this.store$.select(isUserAuth).pipe(
            tap(data => data),
            take(1),
            switchMap((data: string) => {
                if(!!data) {
                    return of(true);
                }
                else {
                    this.router.navigateByUrl(`/login`);
                        return of(false);
                }
            })
        );
    }
}
