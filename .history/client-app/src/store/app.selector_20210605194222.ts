import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STATE,AppState } from './app.state';

export const featureSelector = createFeatureSelector<AppState>(STATE);

/*export const getEquipmentsList = createSelector(
    featureSelector,
    (state) => state.equipmentList
  );*/