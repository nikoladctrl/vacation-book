import { createAction, props } from '@ngrx/store';

export const createEmployees = createAction(
  '[Employee] Create Employees'
);

export const createEmployeesSuccess = createAction(
  '[Employee] Create Employees Success',
  props<{ data: any }>()
);

export const createEmployeesFailure = createAction(
  '[Employee] Create Employees Failure',
  props<{ error: any }>()
);
