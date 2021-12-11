import { createAction, props } from '@ngrx/store';

export const loadCompanies = createAction(
  '[Companies Guard] Load Companies'
);

export const loadCompaniesSuccess = createAction(
  '[Company Effects] Load Companies Success',
  props<{ data: any }>()
);

export const loadCompaniesFailure = createAction(
  '[Company Effects] Load Companies Failure',
  props<{ error: any }>()
);
