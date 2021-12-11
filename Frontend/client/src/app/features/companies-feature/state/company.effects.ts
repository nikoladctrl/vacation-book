import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as CompanyActions from './company.actions';



@Injectable()
export class CompanyEffects {

  



  constructor(private actions$: Actions) {}

}
