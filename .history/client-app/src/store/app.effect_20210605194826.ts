import { Injectable } from '@angular/core';
import {
    Actions,
    createEffect,
    ofType
} from '@ngrx/effects';
import {
    map,
    switchMap,
    withLatestFrom
} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AuthService } from '../services/auth.service';
import { AppActions } from './app.action';
@Injectable()
export class AppEffects {
    /*fetchVenueDetails$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.fetchVenueDetails),
            //withLatestFrom(this.store$.select(getSelectedVenueId)),
            switchMap(([_, venue]) =>
                this.service.getVenueDetails(venue).pipe(
                    map((results) => venueActions.fetchVenueDetailsSuccess(results)),
                    catchHttpError()
                )
            )
        )
    );*/
    constructor(
        private actions$: Actions,
        private store$: Store,
        private authService: AuthService,) { }
}