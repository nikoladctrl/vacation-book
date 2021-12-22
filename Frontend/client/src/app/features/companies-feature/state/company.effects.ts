import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map, filter, switchMap, catchError, concatMap, tap, delay, debounceTime } from 'rxjs/operators';


import * as CompanyActions from './company.actions';
import { AppState } from 'src/app/store';

import { Store } from '@ngrx/store';
import * as fromCompanySelectors from './company.selectors';
import { CompanyService } from '../resources/company.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class CompanyEffects {

  getCompanies$ = createEffect(() => 
    this.actions$.pipe(
        ofType(CompanyActions.getCompanies),
        concatLatestFrom(() => this.store.select(fromCompanySelectors.selectLoadStatus)),
        filter(([, loadStatus]) => loadStatus === 'NOT_LOADED'),
        map(() => CompanyActions.loadCompanies())
    )
  );


  loadCompanies$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CompanyActions.loadCompanies),
        switchMap(() => this.companyService.getCompanies()),
        map(companies => CompanyActions.loadCompaniesSuccess({ companies:  companies })),
        catchError(error => of(CompanyActions.loadCompaniesFailure({ error : error })))
    )
  );

  createCompany$ = createEffect(() => 
    this.actions$.pipe(
        ofType(CompanyActions.createCompany),
        concatMap((action) => this.companyService.createCompany(action.company)),
        map((company) => CompanyActions.createCompanySuccess({ company })),
        tap(() => this.router.navigate(['/companies'])),
        catchError((error) => of(CompanyActions.createCompanyFailure({ error: error })))
    )
  );

  editCompany$ = createEffect(() =>
    this.actions$.pipe(
        ofType(CompanyActions.editCompany),
        concatMap((action) => this.companyService.updateCompany(action.id, action.company)),
        map(company => CompanyActions.editCompanySuccess({ company })),
        tap(() => this.router.navigate(['/companies'])),
        catchError((error) => of(CompanyActions.editCompanyFailure({ error: error })))
    )
  );

  deleteCompany$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CompanyActions.deleteCompany),
      concatMap((action) => this.companyService.deleteCompany(action.id)),
      map(() => CompanyActions.deleteCompanySuccess()),
      tap(() => this.router.navigate(['/companies'])),
      catchError(error => of(CompanyActions.deleteCompanyFailure({ error })))
    )
  );

  getBusinesses$ = createEffect(() => 
    this.actions$.pipe(
        ofType(CompanyActions.getBusinesses),
        switchMap(() => this.companyService.getBusinesses()),
        map(businesses => CompanyActions.loadBusinessesSuccess({ businesses })),
        catchError((error) => of(CompanyActions.loadBusinessesFailure({ error: error })))
    )
  );



  constructor(
              private actions$: Actions, 
              private store: Store<AppState>, 
              private companyService: CompanyService,
              private router: Router
  ) {}

}
