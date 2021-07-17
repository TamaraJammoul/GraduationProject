import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STATE, AppState } from './app.state';

export const featureSelector = createFeatureSelector<AppState>(STATE);

export const getBugsList = createSelector(
  featureSelector,
  (state) => state.bugs
);

export const getErrorsList = createSelector(
  featureSelector,
  (state) => state.errors
);