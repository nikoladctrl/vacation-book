import { createReducer, on } from '@ngrx/store';
import { Employee } from 'src/app/models/employee.model';
import * as EmployeeActions from './employee.actions';

export const employeeFeatureKey = 'employee';

export interface State {
  employees: Employee[];
  currentEmployee: Employee;
  error: Error;
  loadStatus: 'NOT_LOADED' | 'LOADING' | 'LOADED';
}

export const initialState: State = {
  employees: null,
  currentEmployee: null,
  error: null,
  loadStatus: 'NOT_LOADED'
};

export const reducer = createReducer(
  initialState,

  on(EmployeeActions.loadEmployees, state => {
    return {
      ...state,
      loadStatus: 'LOADING'
    };
  }),
  on(EmployeeActions.loadEmployeesSuccess, (state, action) => {
    return {
      ...state,
      employees: action.employees,
      loadStatus: 'LOADED'
    };
  }),
  on(EmployeeActions.loadEmployeesFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      loadStatus: 'NOT_LOADED'
    };
  }),

);
