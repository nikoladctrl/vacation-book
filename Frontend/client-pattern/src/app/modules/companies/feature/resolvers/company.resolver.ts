import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/store';

import * as CompanyActions from '../../data/company.actions';

@Injectable({
  providedIn: 'root'
})
export class CompanyResolver implements Resolve<boolean> {

  constructor(private store: Store<AppState>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.store.dispatch(CompanyActions.getCompany({ id: +route.params.id }));
    return of(true);
  }
}
