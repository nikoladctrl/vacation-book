import { createFeatureSelector, createSelector, select, State } from '@ngrx/store';
import * as fromEmployee from './employee.reducer';

export const selectEmployeeState = createFeatureSelector<fromEmployee.State>(
  fromEmployee.employeeFeatureKey
);

export const selectLoadStatus = createSelector(
  selectEmployeeState,
  (state: fromEmployee.State) => state.loadStatus
);

export const selectIsLoaded = createSelector(
  selectEmployeeState,
  (state: fromEmployee.State) => state.loadStatus === 'LOADED'
);

export const selectEmployees = createSelector(
  selectEmployeeState,
  (state: fromEmployee.State) => state.employees
);

export const selectCurrentEmployee = createSelector(
  selectEmployeeState,
  (state: fromEmployee.State) => state.currentEmployee 
);
