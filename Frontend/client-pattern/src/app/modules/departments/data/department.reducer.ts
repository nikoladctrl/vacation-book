import { Action, createReducer, on } from '@ngrx/store';
import * as DepartmentActions from './department.actions';

export const departmentFeatureKey = 'department';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(DepartmentActions.createDepartments, state => state),
  on(DepartmentActions.createDepartmentsSuccess, (state, action) => state),
  on(DepartmentActions.createDepartmentsFailure, (state, action) => state),

);
