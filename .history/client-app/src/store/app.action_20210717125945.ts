import { createAction } from '@ngrx/store';
import { Error } from '../models/error.model';
import { Bug } from '../models/bug.model';

const fetchErrors = createAction(
    '[error] Fetch Errors',
);

const fetchErrorsSuccess = createAction(
    '[error] Fetch Errors Success',
    (error: Error[]) => ({ error })
);

const fetchBugs = createAction(
    '[error] Fetch Bugs',
);

const fetchBugsSuccess = createAction(
    '[error] Fetch Bugs Success',
    (bugs: Bug[]) => ({ bugs })
);

export const AppActions = {
    fetchErrors,
    fetchErrorsSuccess,
    fetchBugs,
    fetchBugsSuccess
}