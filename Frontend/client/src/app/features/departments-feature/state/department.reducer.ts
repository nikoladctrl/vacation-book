import { Action, createReducer, on } from '@ngrx/store';
import * as DepartmentActions from './department.actions';

export const departmentFeatureKey = 'department';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(DepartmentActions.loadDepartments, state => state),
  on(DepartmentActions.loadDepartmentsSuccess, (state, action) => state),
  on(DepartmentActions.loadDepartmentsFailure, (state, action) => state),

);
