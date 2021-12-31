import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as EmployeeActions from './employee.actions';



@Injectable()
export class EmployeeEffects {

  createEmployees$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(EmployeeActions.createEmployees),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => EmployeeActions.createEmployeesSuccess({ data })),
          catchError(error => of(EmployeeActions.createEmployeesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
