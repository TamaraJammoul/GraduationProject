import { createReducer, ActionReducerMap, on } from '@ngrx/store';
import { AppActions } from './app.action';
import { AppState } from './app.state';
import { Error } from '../models/error.model';
import { Bug } from '../models/bug.model';

export const bugsReducer = createReducer(
  [] as Bug[],
  on(AppActions.fetchBugsSuccess, (_, { bugs }) => bugs)
);

export const errorsReducer = createReducer(
  [] as Error[],
  on(AppActions.fetchErrorsSuccess, (_, { error }) => error)
);

export const reducers: ActionReducerMap<AppState> = {
  bugs: bugsReducer,
  errors: errorsReducer
}
