import { Injectable } from '@angular/core';
import {
    Actions,
    createEffect,
    ofType
} from '@ngrx/effects';
import {
    map,
    switchMap,
} from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { AppActions } from './app.action';
import { BugsService } from '../services/bugs.service';
import { ErrorsService } from '../services/errors.service';


@Injectable()
export class AppEffects {

    fetchBugs$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.fetchBugs),
            switchMap(() =>
                this.bugsService.fetchBugs().pipe(
                    map((results) => AppActions.fetchBugsSuccess(results)),
                )
            )
        )
    );

    fetchErrors$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.fetchErrors),
            switchMap(() =>
                this.errorsService.fetchErrors().pipe(
                    map((results) => AppActions.fetchErrorsSuccess(results)),
                )
            )
        )
    );

    deleteErrors$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.deleteError),
            switchMap(action =>
            this.errorsService.deleteError(action.errorId).pipe(
                    map(() => AppActions.deleteErrorSuccess()),
                )
            )
        )
    );

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.login),
            switchMap(action =>
            this.authService.login(action.data).pipe(
                    map(() => AppActions.loginSuccess()),
                )
            )
        )
    );

    signup$ = createEffect(() =>
    this.actions$.pipe(
        ofType(AppActions.signUp),
        switchMap(action =>
        this.authService.signUp(action.data).pipe(
                map(() => AppActions.signUpSuccess()),
            )
        )
    )
);
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private bugsService: BugsService,
        private errorsService: ErrorsService
    ) { }
}