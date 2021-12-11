import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map, filter, switchMap, catchError, concatMap, tap } from 'rxjs/operators';


import * as CompanyActions from './company.actions';
import { AppState } from 'src/app/store';

import { Store } from '@ngrx/store';
import * as fromCompanySelectors from './company.selectors';
import { CompanyService } from '../resources/company.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class CompanyEffects {

  getCompanies$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(CompanyActions.getCompanies),
        concatLatestFrom(() => this.store.select(fromCompanySelectors.selectLoadStatus)),
        filter(([, loadStatus]) => loadStatus === 'NOT_LOADED'),
        map(() => CompanyActions.loadCompanies())

    );
  });


  loadCompanies$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(CompanyActions.loadCompanies),
        switchMap(() =>
          this.companyService.getCompanies().pipe(
            map(companies => CompanyActions.loadCompaniesSuccess({ companies:  companies })),
            catchError(error => of(CompanyActions.loadCompaniesFailure({ error : error }))))
          ),
    );
  });

  createCompany$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(CompanyActions.createCompany),
        concatMap((company) => this.companyService.createCompany(company).pipe(
          map(company => CompanyActions.createCompanySuccess({ company })),
          tap(() => this.router.navigate(['/'])),
          catchError((error) => of(CompanyActions.createCompanyFailure({ error: error })))
        ))
    );
  });

  editCompany$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(CompanyActions.editCompany),
        concatMap((id, company) => this.companyService.updateCompany(id, company).pipe(
          map(company => CompanyActions.editCompanySuccess({ company })),
          tap(() => this.router.navigate(['/'])),
          catchError((error) => of(CompanyActions.editCompanyFailure({ error: error })))
        ))
    );
  });



  constructor(private actions$: Actions, 
              private store: Store<AppState>, 
              private companyService: CompanyService,
              private router: Router) {}

}
