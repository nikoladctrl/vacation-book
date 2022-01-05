import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as CompanyActions from './company.actions';
import { Company } from '../model/company.model';
import { Business } from '../model/business.model';

export const companiesFeatureKey = 'companies';

export interface State extends EntityState<Company> {
  currentCompany: Company;
  loadStatus: 'NOT_LOADED' | 'LOADING' | 'LOADED';
  businesses: Business[];
  error: Error;
}

export const adapter: EntityAdapter<Company> = createEntityAdapter<Company>();

export const initialState: State = adapter.getInitialState({
  currentCompany: null,
  loadStatus: 'NOT_LOADED',
  businesses: [],
  error: null,

});

export const reducer = createReducer(
  initialState,
  on(CompanyActions.addCompany,
    (state, action) => adapter.addOne(action.company, state)
  ),
  on(CompanyActions.upsertCompany,
    (state, action) => adapter.upsertOne(action.company, state)
  ),
  on(CompanyActions.addCompanys,
    (state, action) => adapter.addMany(action.companys, state)
  ),
  on(CompanyActions.upsertCompanys,
    (state, action) => adapter.upsertMany(action.companys, state)
  ),
  on(CompanyActions.updateCompany,
    (state, action) => adapter.updateOne(action.company, state)
  ),
  on(CompanyActions.updateCompanys,
    (state, action) => adapter.updateMany(action.companys, state)
  ),
  on(CompanyActions.deleteCompany,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(CompanyActions.deleteCompanys,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(CompanyActions.loadCompaniesSuccess,
    (state, action) => adapter.setAll(action.companies, state)
  ),
  on(
    CompanyActions.loadCompaniesFailure, 
    CompanyActions.loadCompanyFailure, 
    CompanyActions.addCompanyFailure, (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),
  on(CompanyActions.clearCompanys,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
