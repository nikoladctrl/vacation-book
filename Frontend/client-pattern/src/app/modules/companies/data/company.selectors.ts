import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCompanyReducer from './company.reducer';
import { Company } from '../model/company.model';
import { Business } from '../model/business.model';

export const selectCompaniesState = createFeatureSelector<fromCompanyReducer.State>(
    fromCompanyReducer.companiesFeatureKey
);

export const selectAllCompanies = createSelector(
    selectCompaniesState,
    fromCompanyReducer.selectAll
);

export const selectAllEntities = createSelector(
    selectCompaniesState,
    fromCompanyReducer.selectEntities
);

export const entityExists = createSelector(
    selectAllEntities,
    (entities, props): boolean => {
      return entities[props.id] == undefined ? false : true;
    }
);

export const selectCurrentCompany = createSelector(
    selectCompaniesState,
    (state) => state.currentCompany
);

export const selectIsLoaded = createSelector(
    selectCompaniesState, 
    (state) => state.loadStatus === 'LOADED'
);

export const selectLoadStatus = createSelector(
    selectCompaniesState, 
    (state) => state.loadStatus
);

export const selectBusinesses = createSelector(
    selectCompaniesState, 
    (state) => state.businesses
);

export const selectEditViewModel = createSelector(
    selectCurrentCompany,
    selectBusinesses,
    (company, businesses): { company: Company, businesses: Business[] } => { return { company, businesses }; }
);