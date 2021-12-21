import { Department } from './../../../models/department.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDepartment from './department.reducer';
import { State } from './department.reducer';

export const selectDepartmentState = createFeatureSelector<fromDepartment.State>(
  fromDepartment.departmentFeatureKey
);

export const selectLoadStatus = createSelector(
  selectDepartmentState,
  (state: State) => state.loadStatus
);

export const selectIsLoaded = createSelector(
  selectDepartmentState,
  (state: State) => state.loadStatus === 'LOADED'
);

export const selectCompanies = createSelector(
  selectDepartmentState,
  (state: State) => state.departments
);

export const selectCurrentDepartment = createSelector(
  selectDepartmentState,
  (state: State) => state.currentDepartment
);

export const selectCurrentDepartmentEmployees = createSelector(
  selectDepartmentState, 
  selectCurrentDepartment,
  (state: State, selectCurrentDepartment: Department) => selectCurrentDepartment.employees
);


