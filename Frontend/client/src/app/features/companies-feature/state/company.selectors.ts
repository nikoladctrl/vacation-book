import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCompany from './company.reducer';
import { State } from './company.reducer';
import { Company } from 'src/app/models/company.model';

export const selectCompanyState = createFeatureSelector<fromCompany.State>(
  fromCompany.companyFeatureKey
);

export const selectLoadStatus = createSelector(
  selectCompanyState,
  (state: State) => state.loadStatus
);

export const selectIsLoaded = createSelector(
  selectCompanyState,
  (state: State) => state.loadStatus === 'LOADED'
);

export const selectCompanies = createSelector(
  selectCompanyState,
  (state: State) => state.companies
);

export const selectCurrentCompany = createSelector(
  selectCompanyState,
  (state: State) => state.currentCompany
);

export const selectCurrentCompanyDepartments = createSelector(
  selectCompanyState, 
  selectCurrentCompany,
  (state: State, selectCurrentCompany: Company) => selectCurrentCompany.departments
);

export const selectCurrentCompanyEmployees = createSelector(
  selectCompanyState, 
  selectCurrentCompany,
  (state: State, selectCurrentCompany: Company) => selectCurrentCompany.employees
);

export const selectBusinesses = createSelector(
  selectCompanyState,
  (state: State) => state.businesses
);

