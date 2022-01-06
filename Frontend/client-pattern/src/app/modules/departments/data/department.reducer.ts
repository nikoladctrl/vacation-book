import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Department } from '../model/department.model';
import * as DepartmentActions from './department.actions';

export const departmentsFeatureKey = 'departments';

export interface State extends EntityState<Department> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Department> = createEntityAdapter<Department>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
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
