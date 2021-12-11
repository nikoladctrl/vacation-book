import { AppState } from './../../../../store/index';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Store } from '@ngrx/store';
import * as CompanyActions from '../../state/company.actions';
import * as fromCompanySelectors from '../../state/company.selectors';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompaniesGuard implements CanActivate {

  constructor(private store: Store<AppState>) { }

  canActivate(
    route: ActivatedRouteSnapshot): Observable<boolean> {
      this.store.dispatch(CompanyActions.getCompanies());
      return this.store.select(fromCompanySelectors.selectIsLoaded).pipe(filter((isLoaded) => isLoaded));
  }
  
}
