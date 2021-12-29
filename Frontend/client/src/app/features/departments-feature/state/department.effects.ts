import { selectLoadStatus } from './../../companies-feature/state/company.selectors';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { catchError, map, concatMap, filter, switchMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as DepartmentActions from './department.actions';
import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import * as fromDepartmentSelectors from './department.selectors';
import { DepartmentService } from '../resources/department.service';
import { Router } from '@angular/router';



@Injectable()
export class DepartmentEffects {
  
  getDepartments$ = createEffect(() => 
    this.actions$.pipe(
        ofType(DepartmentActions.getDepartments),
        concatLatestFrom(() => this.store.select(fromDepartmentSelectors.selectLoadStatus)),
        filter(([_, loadStatus]) => loadStatus === 'NOT_LOADED'),
        map(() => DepartmentActions.loadDepartments())
    )
  );

  loadDepartments$ = createEffect(() => 
    this.actions$.pipe(
        ofType(DepartmentActions.loadDepartments),
        switchMap(() => this.departmentService.getDepartments()),
        map(departments => DepartmentActions.loadDepartmentsSuccess({ departments:  departments })),
        catchError(error => of(DepartmentActions.loadDepartmentsFailure({ error : error })))
    )
  );

  createDepartment$ = createEffect(() =>
    this.actions$.pipe(
        ofType(DepartmentActions.createDepartment),
        concatMap((action) => this.departmentService.createDepartment(action.department)),
        map(department => DepartmentActions.createDepartmentSuccess({ department })),
        tap(department => this.router.navigate([`/companies/${department.department.company.id}/departments`])),
        catchError(error => of(DepartmentActions.createDepartmentFailure({ error }))),
    )
  );

  editDepartment$ = createEffect(() =>
    this.actions$.pipe(
        ofType(DepartmentActions.editDepartment),
        concatMap((action) => this.departmentService.updateDepartment(action.id, action.department)),
        map(department => DepartmentActions.editDepartmentSuccess({ department })),
        catchError(error => of(DepartmentActions.editDepartmentFailure({ error })))
    )
  );

  deleteDepartment$ = createEffect(() => 
    this.actions$.pipe(
        ofType(DepartmentActions.deleteDepartment),
        concatMap((action) => this.departmentService.deleteDepartment(action.id)),
        map(() => DepartmentActions.deleteDepartmentSuccess()),
        catchError(error => of(DepartmentActions.deleteDepartmentFailure({ error })))
    )
  );


  constructor(
              private actions$: Actions, 
              private store: Store<AppState>, 
              private departmentService: DepartmentService,
              private router: Router
  ) {}

}
