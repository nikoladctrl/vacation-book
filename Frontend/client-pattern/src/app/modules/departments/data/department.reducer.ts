import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as DepartmentActions from './department.actions';
import { Department } from '../model/department.model';

export const departmentsFeatureKey = 'departments';

export interface State extends EntityState<Department> {
  currentDepartment: Department;
  loadStatus: 'NOT_LOADED' | 'LOADING' | 'LOADED';
  error: Error;
}

export const adapter: EntityAdapter<Department> = createEntityAdapter<Department>();

export const initialState: State = adapter.getInitialState({
  currentDepartment: null,
  loadStatus: 'NOT_LOADED',
  error: null
});

export const reducer = createReducer(
  initialState,
  on(DepartmentActions.addDepartment,
    (state, action) => adapter.addOne(action.department, state)
  ),
  on(DepartmentActions.upsertDepartment,
    (state, action) => adapter.upsertOne(action.department, state)
  ),
  on(DepartmentActions.addDepartments,
    (state, action) => adapter.addMany(action.departments, state)
  ),
  on(DepartmentActions.upsertDepartments,
    (state, action) => adapter.upsertMany(action.departments, state)
  ),
  on(DepartmentActions.updateDepartment,
    (state, action) => adapter.updateOne(action.department, state)
  ),
  on(DepartmentActions.updateDepartments,
    (state, action) => adapter.updateMany(action.departments, state)
  ),
  on(DepartmentActions.deleteDepartment,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(DepartmentActions.deleteDepartments,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(DepartmentActions.loadDepartments,
    (state, action) => adapter.setAll(action.departments, state)
  ),
  on(DepartmentActions.clearDepartments,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
