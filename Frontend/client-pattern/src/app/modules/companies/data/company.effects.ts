import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as CompanyActions from './company.actions';



@Injectable()
export class CompanyEffects {

  createCompanys$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CompanyActions.createCompanys),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => CompanyActions.createCompanysSuccess({ data })),
          catchError(error => of(CompanyActions.createCompanysFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
