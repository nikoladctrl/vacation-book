import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromEmployeeReducer from '../data/employee.reducer';

export const selectEmployeesState = createFeatureSelector<fromEmployeeReducer.State>(
    fromEmployeeReducer.employeesFeatureKey
);

export const selectAllCompanies = createSelector(
    selectEmployeesState,
    fromEmployeeReducer.selectAll
);

export const selectAllEntities = createSelector(
    selectEmployeesState,
    fromEmployeeReducer.selectEntities
);

export const entityExists = createSelector(
    selectAllEntities,
    (entities, props): boolean => {
      return entities[props.id] == undefined ? false : true;
    }
);

export const selectCurrentEmployee = createSelector(
    selectEmployeesState,
    (state) => state.currentEmployee
);

export const selectIsLoaded = createSelector(
    selectEmployeesState, 
    (state) => state.loadStatus === 'LOADED'
);

export const selectLoadStatus = createSelector(
    selectEmployeesState, 
    (state) => state.loadStatus
);