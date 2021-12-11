import { createReducer, on } from '@ngrx/store';
import { Company } from 'src/app/models/company.model';
import * as CompanyActions from './company.actions';

export const companyFeatureKey = 'company';

export interface State {
  companies: Company[];
  currentCompany: Company;
  loadStatus: 'NOT_LOADED' | 'LOADING' | 'LOADED';
  error: Error;
}

export const initialState: State = {
  companies: null,
  currentCompany: null,
  loadStatus: 'NOT_LOADED',
  error: null
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
  on(CompanyActions.getCompany, (state, action) => {
    return {
      ...state,
      currentCompany: state.companies.find(c => c.id === action.id)
    };
  })

);
