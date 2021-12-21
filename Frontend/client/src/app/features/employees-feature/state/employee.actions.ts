import { Employee } from './../../../models/employee.model';
import { createAction, props } from '@ngrx/store';

export const getEmployees = createAction(
  '[Employees Guard] Get Employees'
);

export const loadEmployees = createAction(
  '[Employee Effects] Load Employees'
);

export const loadEmployeesSuccess = createAction(
  '[Employee Effects] Load Employees Success',
  props<{ employees: Employee[] }>()
);

export const loadEmployeesFailure = createAction(
  '[Employee Effects] Load Employees Failure',
  props<{ error: any }>()
);

export const getEmployee = createAction(
  '[Employee Detail Component] Get Employee',
  props<{ id: number }>()
);

export const createEmployee = createAction(
  '[Employee New Component] Create Employee',
  props<{ employee: Employee }>()
);

export const createEmployeeSuccess = createAction(
  '[Employee Effects] Create Employee Success',
  props<{ employee: Employee }>()
);

export const createEmployeeFailure = createAction(
  '[Employee Effects] Create Employee Failure',
  props<{ error: Error }>()
);

export const editEmployee = createAction(
  '[Employee New Component] Edit Employee',
  props<{ id: number, employee: Employee }>()
);

export const editEmployeeSuccess = createAction(
  '[Employee Effects] Edit Employee Success',
  props<{ employee: Employee }>()
);

export const editEmployeeFailure = createAction(
  '[Employee Effects] Edit Employee Failure',
  props<{ error: Error }>()
);

export const deleteEmployee = createAction(
  '[Employee Detail Component] Delete Employee',
  props<{ id: number }>()
);

export const deleteEmployeeSuccess = createAction(
  '[Employee Effects] Delete Employee Success'
);

export const deleteEmployeeFailure = createAction(
  '[Employee Effects] Delete Employee Failure',
  props<{ error: Error }>()
);

