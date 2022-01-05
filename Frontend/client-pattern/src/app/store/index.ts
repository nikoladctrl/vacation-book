import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCompany from '../modules/companies/data/company.reducer';
import * as fromDepartment from '../modules/departments/data/department.reducer';
import * as fromEmployee from '../modules/employees/data/employee.reducer';


export interface AppState {
  [fromCompany.companiesFeatureKey]: fromCompany.State;
  [fromDepartment.departmentsFeatureKey]: fromDepartment.State;
  [fromEmployee.employeesFeatureKey]: fromEmployee.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromCompany.companiesFeatureKey]: fromCompany.reducer,
  [fromDepartment.departmentsFeatureKey]: fromDepartment.reducer,
  [fromEmployee.employeesFeatureKey]: fromEmployee.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
