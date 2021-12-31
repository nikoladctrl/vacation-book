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
  [fromCompany.companyFeatureKey]: fromCompany.State;
  [fromDepartment.departmentFeatureKey]: fromDepartment.State;
  [fromEmployee.employeeFeatureKey]: fromEmployee.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromCompany.companyFeatureKey]: fromCompany.reducer,
  [fromDepartment.departmentFeatureKey]: fromDepartment.reducer,
  [fromEmployee.employeeFeatureKey]: fromEmployee.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
