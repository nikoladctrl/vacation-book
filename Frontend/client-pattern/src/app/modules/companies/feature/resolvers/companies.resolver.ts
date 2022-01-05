import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AppState } from 'src/app/store';
import * as CompanyActions from '../../data/company.actions';
import * as fromCompanySelectors from '../../data/company.selectors';

@Injectable({
  providedIn: 'root'
})
export class CompaniesResolver implements Resolve<boolean> {

  constructor(private store: Store<AppState>) { }

  resolve(): Observable<boolean> {
    this.store.dispatch(CompanyActions.getCompanies());
    return this.store.select(fromCompanySelectors.selectIsLoaded).pipe(filter(isLoaded => isLoaded));
  }
}
