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

export const getMembersList = createSelector(
  featureSelector,
  (state) => state.members
);

export const getProjectsList = createSelector(
  featureSelector,
  (state) => state.projects
);

export const getProjectUsersList = createSelector(
  featureSelector,
  (state) => state.projectUsers
);

