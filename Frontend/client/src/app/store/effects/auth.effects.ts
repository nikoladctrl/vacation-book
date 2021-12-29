import { Router } from '@angular/router';
import { AuthService } from './../../features/auth/resources/services/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as AuthActions from '../actions/auth.actions';



@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
        ofType(AuthActions.login),
        concatMap((action) => this.authService.login(action.loginUser)),
        map(employee => AuthActions.loginSuccess({ employee })),
        catchError(error => of(AuthActions.loginFailure({ error })))
    )
  );


  constructor(
      private actions$: Actions,
      private authService: AuthService,
      private router: Router
  ) {}

}
