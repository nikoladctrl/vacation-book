import { Action, createReducer, on } from '@ngrx/store';
import * as EmployeeActions from './employee.actions';

export const employeeFeatureKey = 'employee';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(EmployeeActions.loadEmployees, state => state),
  on(EmployeeActions.loadEmployeesSuccess, (state, action) => state),
  on(EmployeeActions.loadEmployeesFailure, (state, action) => state),

);
