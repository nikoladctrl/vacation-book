import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as EmployeeActions from './employee.actions';



@Injectable()
export class EmployeeEffects {

  loadEmployees$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(EmployeeActions.loadEmployees),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => EmployeeActions.loadEmployeesSuccess({ data })),
          catchError(error => of(EmployeeActions.loadEmployeesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
