import { createAction, props } from '@ngrx/store';
import { Business } from 'src/app/shared/models/business.model';
import { Company } from 'src/app/shared/models/company.model';
import { Department } from 'src/app/shared/models/department.model';

/** Calling in Guards */
export const getCompanies = createAction(
  '[Companies Guard] Get Companies'
);

export const getCompany = createAction(
  '[Company Guard] Get Company',
  props<{ id: number }>()
);



/** Calling in Company Effects */
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

export const createCompanySuccess = createAction(
  '[Company Effects] Create Company Success',
  props<{ company: Company }>()
);

export const createCompanyFailure = createAction(
  '[Company Effects] Create Company Failure',
  props<{ error: Error }>()
);

export const editCompanySuccess = createAction(
  '[Company Effects] Edit Company Success',
  props<{ company: Company }>()
);

export const editCompanyFailure = createAction(
  '[Company Effects] Edit Company Failure',
  props<{ error: Error }>()
);

export const deleteCompanySuccess = createAction(
  '[Company Effects] Delete Company Success'
);

export const deleteCompanyFailure = createAction(
  '[Company Effects] Delete Company Failure',
  props<{ error: Error }>()
);

export const loadBusinessesSuccess = createAction(
  '[Company Effects] Load Businesses Success',
  props<{ businesses: Business[] }>()
);

export const loadBusinessesFailure = createAction(
  '[Company Effects] Edit Businesses Failure',
  props<{ error: Error }>()
);

export const createCompanyDepartmentSuccess = createAction(
  '[Company Effects] Create Company Department Success',
  props<{ department: Department }>()
);

export const createCompanyDepartmentFailure = createAction(
  '[Company Effects] Create Company Department Failure',
  props<{ error: Error }>()
);



/** Callings from Company New Component */
export const createCompany = createAction(
  '[Company New Component] Create Company',
  props<{ company: Company }>()
);



/** Calling from Company Edit Component */
export const editCompany = createAction(
  '[Company Edit Component] Edit Company',
  props<{ id: number, company: Company }>()
);

export const deleteCompany = createAction(
  '[Company Edit Component] Delete Company',
  props<{ id: number}>()
);



/** Calling from Companies Component */
export const getBusinesses = createAction(
  '[Companies Component] Get Businesses'
);



/** Calling from Company Detail New Component */
export const createCompanyDepartment = createAction(
  '[Company Detail New Component] Create Company Department',
  props<{ department: { name: string, companyId: number} }>()
);



