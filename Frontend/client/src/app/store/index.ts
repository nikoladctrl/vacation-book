import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCompany from '../features/companies-feature/state/company.reducer';
import * as fromDepartment from '../features/departments-feature/state/department.reducer';
import * as fromEmployee from '../features/employees-feature/state/employee.reducer';


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
