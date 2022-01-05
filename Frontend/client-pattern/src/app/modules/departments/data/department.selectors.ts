import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDepartmentReducer from '../data/department.reducer';

export const selectCompaniesState = createFeatureSelector<fromDepartmentReducer.State>(
    fromDepartmentReducer.departmentsFeatureKey
);

export const selectAllCompanies = createSelector(
    selectCompaniesState,
    fromDepartmentReducer.selectAll
);

export const selectAllEntities = createSelector(
    selectCompaniesState,
    fromDepartmentReducer.selectEntities
);

export const entityExists = createSelector(
    selectAllEntities,
    (entities, props): boolean => {
      return entities[props.id] == undefined ? false : true;
    }
);

export const selectCurrentDepartment = createSelector(
    selectCompaniesState,
    (state) => state.currentDepartment
);

export const selectIsLoaded = createSelector(
    selectCompaniesState, 
    (state) => state.loadStatus === 'LOADED'
);

export const selectLoadStatus = createSelector(
    selectCompaniesState, 
    (state) => state.loadStatus
);