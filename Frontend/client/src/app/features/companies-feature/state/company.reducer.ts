import { Action, createReducer, on } from '@ngrx/store';
import * as CompanyActions from './company.actions';

export const companyFeatureKey = 'company';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

);
