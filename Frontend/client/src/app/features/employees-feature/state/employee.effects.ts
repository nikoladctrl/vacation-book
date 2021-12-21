import { EmployeeService } from './../resources/employee.service';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, filter, switchMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as EmployeeActions from './employee.actions';
import * as fromEmployeeSelectors from '../state/employee.selectors';
import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';



@Injectable()
export class EmployeeEffects {

  getEmployees$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(EmployeeActions.getEmployees),
      concatLatestFrom(() => this.store.select(fromEmployeeSelectors.selectLoadStatus)),
      filter(([, loadStatus]) => loadStatus === 'NOT_LOADED'),
      map(() => EmployeeActions.loadEmployees())
    );
  });

  loadEmployees$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EmployeeActions.loadEmployees),
      switchMap(() =>
        this.employeeService.getEmployees().pipe(
          map(employees => EmployeeActions.loadEmployeesSuccess({ employees:  employees })),
          catchError(error => of(EmployeeActions.loadEmployeesFailure({ error : error }))))
        ),
    );
  });

  createEmployee$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EmployeeActions.createEmployee),
      concatMap((action) => this.employeeService.createEmployee(action.employee).pipe(
        map(employee => EmployeeActions.createEmployeeSuccess({ employee })),
        tap(() => this.router.navigate(['/employees'])),
        catchError((error) => of(EmployeeActions.createEmployeeFailure({ error: error })))
      ))
    );
  });

  editEmployee$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EmployeeActions.editEmployee),
      concatMap((action) => this.employeeService.updateEmployee(action.id, action.employee).pipe(
        map(employee => EmployeeActions.editEmployeeSuccess({ employee: employee })),
        tap(() => this.router.navigate(['/employees'])),
        catchError((error) => of(EmployeeActions.editEmployeeFailure({ error: error })))
      ))
    );
  });

  deleteEmployee$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(EmployeeActions.deleteEmployee),
      concatMap((action) =>
        this.employeeService.deleteEmployee(action.id).pipe(
          map(() => EmployeeActions.deleteEmployeeSuccess()),
          tap(() => this.router.navigate(['/employees'])),
          catchError(error => of(EmployeeActions.deleteEmployeeFailure({ error }))))
      )
    );
  });



  constructor(
              private actions$: Actions, 
              private store: Store<AppState>,
              private employeeService: EmployeeService, 
              private router: Router
  ) {}
}
