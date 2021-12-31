import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as DepartmentActions from './department.actions';



@Injectable()
export class DepartmentEffects {

  createDepartments$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(DepartmentActions.createDepartments),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => DepartmentActions.createDepartmentsSuccess({ data })),
          catchError(error => of(DepartmentActions.createDepartmentsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
