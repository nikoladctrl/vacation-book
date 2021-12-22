import { Department } from './../../../models/department.model';
import { createAction, props } from '@ngrx/store';

export const getDepartments = createAction(
  '[Departments Guard] Get Departments'
);

export const loadDepartments = createAction(
  '[Department] Load Departments'
);

export const loadDepartmentsSuccess = createAction(
  '[Department Effects] Load Departments Success',
  props<{ departments: Department[] }>()
);

export const loadDepartmentsFailure = createAction(
  '[Department Effects] Load Departments Failure',
  props<{ error: any }>()
);

export const getDepartment = createAction(
  '[Department Guard] Get Department',
  props<{ id: number }>()
);

export const createDepartment = createAction(
  '[Department New Component] Create Department', 
  props<{ department: Department }>()
);

export const createDepartmentSuccess = createAction(
  '[Department Effects] Create Department Success', 
  props<{department: Department}>()
);

export const createDepartmentFailure = createAction(
  '[Department Effects] Create Department Failure', 
  props<{error: Error}>()
);

export const editDepartment = createAction(
  '[Department Edit Component] Edit Department', 
  props<{id: number, department: Department}>()
);

export const editDepartmentSuccess = createAction(
  '[Department Effects] Edit Department Success', 
  props<{department: Department}>()
);

export const editDepartmentFailure = createAction(
  '[Department Effects] Create Department Failure', 
  props<{error: Error}>()
);

export const deleteDepartment = createAction(
  '[Department Edit Component] Delete Department', 
  props<{id: number}>()
);

export const deleteDepartmentSuccess = createAction(
  '[Department Effects] Delete Department Success'
);

export const deleteDepartmentFailure = createAction(
  '[Department Effects] Delete Department Failure', 
  props<{error: Error}>()
);