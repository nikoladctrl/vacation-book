import { createReducer, on } from '@ngrx/store';
import { Business } from 'src/app/models/business.model';
import { Company } from 'src/app/models/company.model';
import * as CompanyActions from './company.actions';

export const companyFeatureKey = 'company';

export interface State {
  companies: Company[];
  currentCompany: Company;
  loadStatus: 'NOT_LOADED' | 'LOADING' | 'LOADED';
  error: Error;
  businesses: Business[];
}

export const initialState: State = {
  companies: null,
  currentCompany: null,
  loadStatus: 'NOT_LOADED',
  error: null,
  businesses: null 
};

export const reducer = createReducer(
  initialState,

  on(CompanyActions.loadCompanies, state => {
    return {
      ...state,
      loadStatus: 'LOADING'
    };
  }), 
  on(CompanyActions.loadCompaniesSuccess, (state, action) => {
    return {
      ...state,
      companies: action.companies,
      loadStatus: 'LOADED'
    };
  }),
  on(CompanyActions.loadCompaniesFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      loadStatus: 'NOT_LOADED'
    };
  }),
  on(CompanyActions.createCompanySuccess, (state, action) => {
    return {
      ...state,
      companies: [...state.companies, action.company]
    };
  }),
  
  on(CompanyActions.editCompanySuccess, (state, action) => {
    
    let currCompanies = [...state.companies];
    currCompanies[currCompanies.findIndex(c => c.id === action.company.id)] = action.company;
    return {
      ...state,
      companies: currCompanies
    };
  }),
  on(CompanyActions.getCompany, (state, action) => {
    return {
      ...state,
      currentCompany: state.companies.find(c => c.id === action.id)
    };
  }),
  on(CompanyActions.loadBusinessesSuccess, (state, action) => {
    return {
      ...state,
      businesses: action.businesses
    };
  }),
  on(CompanyActions.deleteCompany, (state, action) => {
    return {
      ...state,
      companies: state.companies.filter(c => c.id !== action.id)
    };
  }),
  on( CompanyActions.createCompanyFailure,
      CompanyActions.editCompanyFailure, 
      CompanyActions.loadBusinessesFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }),

);
