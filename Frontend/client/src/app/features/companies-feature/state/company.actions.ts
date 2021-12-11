import { createAction, props } from '@ngrx/store';
import { Company } from 'src/app/models/company.model';

export const getCompanies = createAction(
  '[Companies Guard] Get Companies'
);

export const loadCompanies = createAction(
  '[Companies Effects] Load Companies'
);

export const loadCompaniesSuccess = createAction(
  '[Company Effects] Load Companies Success',
  props<{ companies: Company[] }>()
);

export const loadCompaniesFailure = createAction(
  '[Company Effects] Load Companies Failure',
  props<{ error: any }>()
);

export const getCompany = createAction(
  '[Company Guard] Get Company',
  props<{ id: number }>()
);

export const createCompany = createAction(
  '[Company New Component] Load Company',
  props<{ company: Company }>()
);

export const createCompanySuccess = createAction(
  '[Company Effects] Create Company Success',
  props<{ company: Company }>()
);

export const createCompanyFailure = createAction(
  '[Company Effects] Create Company Failure',
  props<{ error: Error }>()
);

export const editCompany = createAction(
  '[Company Edit Component] Edit Company',
  props<{ id: number, company: Company }>()
);

export const editCompanySuccess = createAction(
  '[Company Effects] Edit Company Success',
  props<{ company: Company }>()
);

export const editCompanyFailure = createAction(
  '[Company Effects] Create Company Failure',
  props<{ error: Error }>()
);
