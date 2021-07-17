import { createReducer, ActionReducerMap, on } from '@ngrx/store';
//import { AppActions } from './app.action';
import { AppState } from './app.state';


export const spaceSelectedReducer = createReducer(
  null,
  //on(SpaceListActions.selectSpace, (_, { space }) => space)
);

export const reducers: ActionReducerMap<AppState> = {}