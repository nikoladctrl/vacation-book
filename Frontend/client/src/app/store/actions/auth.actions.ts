import { createAction, props } from '@ngrx/store';
import { Employee } from 'src/app/shared/models/employee.model';

export const login = createAction(
  '[Login Component] Login',
  props<{ loginUser: { email: string, company: string } }>()
);

export const loginSuccess = createAction(
  '[Auth Effects] Login Success',
  props<{ employee: Employee }>()
);

export const loginFailure = createAction(
  '[Auth Effects] Login Failure',
  props<{ error: Error }>()
);