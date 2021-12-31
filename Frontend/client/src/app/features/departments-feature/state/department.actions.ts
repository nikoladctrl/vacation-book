import { Department } from '../../../shared/models/department.model';
import { createAction, props } from '@ngrx/store';


/** Calling from Guards */
export const getDepartments = createAction(
  '[Departments Guard] Get Departments'
);

export const getDepartment = createAction(
  '[Department Guard] Get Department',
  props<{ id: number }>()
);



/** Calling from Effects */
export const loadDepartments = createAction(
  '[Department Effects] Load Departments'
);

export const loadDepartmentsSuccess = createAction(
  '[Department Effects] Load Departments Success',
  props<{ departments: Department[] }>()
);

export const loadDepartmentsFailure = createAction(
  '[Department Effects] Load Departments Failure',
  props<{ error: any }>()
);

export const createDepartmentSuccess = createAction(
  '[Department Effects] Create Department Success', 
  props<{department: Department}>()
);

export const createDepartmentFailure = createAction(
  '[Department Effects] Create Department Failure', 
  props<{error: Error}>()
);

export const editDepartmentSuccess = createAction(
  '[Department Effects] Edit Department Success', 
  props<{department: Department}>()
);

export const editDepartmentFailure = createAction(
  '[Department Effects] Create Department Failure', 
  props<{error: Error}>()
);

export const deleteDepartmentSuccess = createAction(
  '[Department Effects] Delete Department Success'
);

export const deleteDepartmentFailure = createAction(
  '[Department Effects] Delete Department Failure', 
  props<{error: Error}>()
);



/** Calling from Department New Component */
export const createDepartment = createAction(
  '[Department New Component] Create Department', 
  props<{ department: { name: string, companyId: number } }>()
);



/** Calling from Department Edit Component */
export const editDepartment = createAction(
  '[Department Edit Component] Edit Department', 
  props<{id: number, department: Department}>()
);

export const deleteDepartment = createAction(
  '[Department Edit Component] Delete Department', 
  props<{id: number}>()
);

