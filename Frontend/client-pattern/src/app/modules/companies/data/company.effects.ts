import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { CompanyService } from '../feature/services/company.service';

import * as CompanyActions from '../data/company.actions';
import * as fromCompanySelectors from '../data/company.selectors';
import { catchError, concatMap, filter, map, switchMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { of } from 'rxjs';

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
        ofType(CompanyActions.addCompany),
        concatMap(action => this.companyService.createCompany(action.company)),
        map(company => CompanyActions.addCompanySuccess({ company })),
        tap(() => this.router.navigate(['/companies'])),
        catchError(error => of(CompanyActions.addCompanyFailure({ error: error })))
    )
  );

  // editCompany$ = createEffect(() =>
  //   this.actions$.pipe(
  //       ofType(CompanyActions.editCompany),
  //       concatMap(action => this.companyService.updateCompany(action.id, action.company)),
  //       map(company => CompanyActions.editCompanySuccess({ company })),
  //       tap(() => this.router.navigate(['/companies'])),
  //       catchError(error => of(CompanyActions.editCompanyFailure({ error: error })))
  //   )
  // );

  deleteCompany$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CompanyActions.deleteCompany),
      concatMap(action => this.companyService.deleteCompany(action.id)),
      map(() => CompanyActions.deleteCompanySuccess()),
      tap(() => this.router.navigate(['/companies'])),
      catchError(error => of(CompanyActions.deleteCompanyFailure({ error })))
    )
  );

  getBusinesses$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CompanyActions.loadBusinesses),
      switchMap(() => this.companyService.getBusinesses()),
      map(businesses => CompanyActions.loadBusinessesSuccess({ businesses })),
      catchError(error => of(CompanyActions.loadBusinessesFailure({ error: error })))
    )
  );



  constructor(private actions$: Actions, private store: Store<AppState>, private companyService: CompanyService, private router: Router) {}

}
