import { Action, createReducer, on } from '@ngrx/store';
import * as EmployeeActions from './employee.actions';

export const employeeFeatureKey = 'employee';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(EmployeeActions.createEmployees, state => state),
  on(EmployeeActions.createEmployeesSuccess, (state, action) => state),
  on(EmployeeActions.createEmployeesFailure, (state, action) => state),

);
