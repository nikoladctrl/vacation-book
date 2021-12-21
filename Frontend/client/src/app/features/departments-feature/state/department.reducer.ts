import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Department } from 'src/app/models/department.model';
import * as DepartmentActions from './department.actions';

export const departmentFeatureKey = 'department';

export interface State {
  departments: Department[];
  currentDepartment: Department;
  loadStatus: 'NOT_LOADED' | 'LOADING' | 'LOADED';
  error: Error;
}

export const initialState: State = {
  departments: null,
  currentDepartment: null,
  loadStatus: 'NOT_LOADED',
  error: null
};

export const reducer = createReducer(
  initialState,

  on(DepartmentActions.loadDepartments, state => {
    return {
      ...state,
      loadStatus: 'LOADING'
    };
  }),
  on(DepartmentActions.loadDepartmentsSuccess, (state, action) => {
    return {
      ...state,
      departments: action.departments,
      loadStatus: 'LOADED'
    };
  }),
  on(DepartmentActions.loadDepartmentsFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      loadStatus: 'NOT_LOADED'
    };
  }),
  on(DepartmentActions.createDepartmentSuccess, (state, action) => {
    return {
      ...state,
      departments: [...state.departments, action.department]
    }
  }),
  on(DepartmentActions.createDepartmentFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(DepartmentActions.editDepartmentSuccess, (state, action) => {

    let currDepartments = [...state.departments];
    let curr = action.department;
    currDepartments[currDepartments.findIndex(d => d.id === curr.id)] = curr;
    
    return {
      ...state,
      departments: currDepartments
    };
  }),
  on(DepartmentActions.editDepartmentFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  })

);
