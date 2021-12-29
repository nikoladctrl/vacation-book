import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CompanyAction from '../../features/companies-feature/state/company.actions';
import { filter, tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';



@Injectable()
export class SpinnerEffects {

  // spinnerOn$ = createEffect(() =>
  //   this.actions$.pipe(
  //       ofType(CompanyAction.loadCompanies),
  //       tap(() => this.spinnerService.show()),
  //   ), { dispatch: false }
  // );

  // spinnerOff$ = createEffect(() => 
  //   this.actions$.pipe(
  //     ofType(CompanyAction.loadCompaniesSuccess, CompanyAction.loadCompaniesFailure),
  //     tap(() => this.spinnerService.hide()),
  //   ), { dispatch: false }
  // );



  constructor(
    private actions$: Actions,
    private spinnerService: NgxSpinnerService  
  ) {}

}
