import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDepartment from './department.reducer';

export const selectDepartmentState = createFeatureSelector<fromDepartment.State>(
  fromDepartment.departmentFeatureKey
);
