import { createAction, props } from '@ngrx/store';

export const createDepartments = createAction(
  '[Department] Create Departments'
);

export const createDepartmentsSuccess = createAction(
  '[Department] Create Departments Success',
  props<{ data: any }>()
);

export const createDepartmentsFailure = createAction(
  '[Department] Create Departments Failure',
  props<{ error: any }>()
);
