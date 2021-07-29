import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { coreActions } from '@libs/core/store/core.actions';

@Injectable({
    providedIn: 'root'
})

export class SpinnerService {
    constructor(private store: Store) {}

    startSpinning(contextId: string) {
        this.store.dispatch(coreActions.showSpinner(contextId));
    }

    stopSpinning(contextId: string) {
        this.store.dispatch(coreActions.hideSpinner(contextId));
    }

    clearSpinner() {
        this.store.dispatch(coreActions.clearSpinner());
    }
}
