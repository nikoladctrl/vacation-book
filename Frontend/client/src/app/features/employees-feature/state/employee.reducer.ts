import { PagesModule } from './../../../pages/pages.module';
import { Pipe } from '@angular/core';
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
  on(EmployeeActions.getEmployee, (state, action) => {
    return {
      ...state,
      currentEmployee: state.employees.find(e => e.id === action.id)
    };
  }),
  on(EmployeeActions.createEmployeeSuccess, (state, action) => {
    return {
      ...state,
      employees: [...state.employees, action.employee]
    };
  }),
  on(EmployeeActions.editEmployeeSuccess, (state, action) => {
    let currEmployees = [...state.employees];
    currEmployees[currEmployees.findIndex(e => e.id === action.employee.id)] = action.employee;
    return {
      ...state,
      employees: currEmployees
    };
  }),
  on(EmployeeActions.deleteEmployee, (state, action) => {
    return {
      ...state,
      employees: state.employees.filter(e => e.id !== action.id)
    };
  })

);
