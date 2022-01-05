import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Company } from '../model/company.model';
import { Business } from '../model/business.model';

export const getCompanies = createAction(
  '[Companies Resolver] Get Companies'
);

export const loadCompanies = createAction(
  '[Company Effect] Load Companies'
);

export const loadCompaniesSuccess = createAction(
  '[Company Effect] Load Companies Success',
  props<{ companies: Company[] }>()
);

export const loadCompaniesFailure = createAction(
  '[Company Effect] Load Companies Failure',
  props<{ error: Error }>()
);

export const getCompany = createAction(
  '[Company Resolver] Get Company',
  props<{ id: number }>()
);

export const loadCompanySuccess = createAction(
  '[Company Effect] Load Company Success',
  props<{ company: Company }>()
);

export const loadCompanyFailure = createAction(
  '[Company Effect] Load Company Failure',
  props<{ error: Error }>()
);

export const addCompany = createAction(
  '[Company New Component] Add Company',
  props<{ company: Company }>()
);

export const addCompanySuccess = createAction(
  '[Company Effect] Add Company Success',
  props<{ company: Company }>()
);

export const addCompanyFailure = createAction(
  '[Company Effect] Add Company Failure',
  props<{ error: Error }>()
);

export const upsertCompany = createAction(
  '[Company/API] Upsert Company',
  props<{ company: Company }>()
);

export const addCompanys = createAction(
  '[Company/API] Add Companys',
  props<{ companys: Company[] }>()
);

export const upsertCompanys = createAction(
  '[Company/API] Upsert Companys',
  props<{ companys: Company[] }>()
);

export const updateCompany = createAction(
  '[Company/API] Update Company',
  props<{ company: Update<Company> }>()
);

export const updateCompanys = createAction(
  '[Company/API] Update Companys',
  props<{ companys: Update<Company>[] }>()
);

export const deleteCompany = createAction(
  '[Company Edit Component] Delete Company',
  props<{ id: number }>()
);

export const deleteCompanySuccess = createAction(
  '[Company Effect] Delete Company Success'
);

export const deleteCompanyFailure = createAction(
  '[Company Effect] Delete Company Failure',
  props<{ error: Error }>()
);

export const deleteCompanys = createAction(
  '[Company/API] Delete Companys',
  props<{ ids: string[] }>()
);

export const clearCompanys = createAction(
  '[Company/API] Clear Companys'
);

export const loadBusinesses = createAction(
  '[Company New Component] Load Businesses',
);

export const loadBusinessesSuccess = createAction(
  '[Company Effect] Load Businesses Success',
  props<{ businesses: Business[] }>()
);

export const loadBusinessesFailure = createAction(
  '[Company Effect] Load Businesses Failure',
  props<{ error: Error }>()
);