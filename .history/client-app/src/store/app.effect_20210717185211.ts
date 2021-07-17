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
import { Store } from '@ngrx/store';
import { AuthService } from '../services/auth.service';
import { AppActions } from './app.action';
import { BugsService } from '../services/bugs.service';
import { ErrorsService } from '../services/errors.service';
import { catchHttpError } from '../libs/custom.pipeables';

@Injectable()
export class AppEffects {

    fetchBugs$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.fetchBugs),
            switchMap(() =>
                this.bugsService.fetchBugs().pipe(
                    map((results) => AppActions.fetchBugsSuccess(results)),
                    catchHttpError()
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
                    catchHttpError()
                )
            )
        )
    );

    deleteErrors$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.deleteError),
            switchMap(([action]) =>
            this.errorsService.deleteError(action.errorId).pipe(
                    map(() => AppActions.deleteErrorSuccess()),
                    catchHttpError()
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private store$: Store,
        private authService: AuthService,
        private bugsService: BugsService,
        private errorsService: ErrorsService
    ) { }
}