import { createAction, props } from '@ngrx/store';
import { Business } from 'src/app/shared/models/business.model';
import { Company } from 'src/app/shared/models/company.model';
import { Department } from 'src/app/shared/models/department.model';

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
  props<{ error: Error }>()
);

export const getCompany = createAction(
  '[Company Guard] Get Company',
  props<{ id: number }>()
);

export const createCompany = createAction(
  '[Company New Component] Create Company',
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
  '[Company Effects] Edit Company Failure',
  props<{ error: Error }>()
);

export const deleteCompany = createAction(
  '[Company Edit Component] Delete Company',
  props<{ id: number}>()
);

export const deleteCompanySuccess = createAction(
  '[Company Effects] Delete Company Success'
);

export const deleteCompanyFailure = createAction(
  '[Company Effects] Delete Company Failure',
  props<{ error: Error }>()
);

export const getBusinesses = createAction(
  '[Companies Component] Get Businesses'
);

export const loadBusinessesSuccess = createAction(
  '[Company Effects] Load Businesses Success',
  props<{ businesses: Business[] }>()
);

export const loadBusinessesFailure = createAction(
  '[Company Effects] Edit Businesses Failure',
  props<{ error: Error }>()
);

export const createCompanyDepartment = createAction(
  '[Company Detail New Component] Create Company Department',
  props<{ department: { name: string, companyId: number} }>()
);

export const createCompanyDepartmentSuccess = createAction(
  '[Company Effects] Create Company Department Success',
  props<{ department: Department }>()
);

export const createCompanyDepartmentFailure = createAction(
  '[Company Effects] Create Company Department Failure',
  props<{ error: Error }>()
);


