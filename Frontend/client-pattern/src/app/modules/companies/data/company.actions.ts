import { createAction, props } from '@ngrx/store';

export const createCompanys = createAction(
  '[Company] Create Companys'
);

export const createCompanysSuccess = createAction(
  '[Company] Create Companys Success',
  props<{ data: any }>()
);

export const createCompanysFailure = createAction(
  '[Company] Create Companys Failure',
  props<{ error: any }>()
);
