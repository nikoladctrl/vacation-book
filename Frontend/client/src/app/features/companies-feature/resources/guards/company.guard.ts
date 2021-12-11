import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/store';
import * as CompanyActions from '../../state/company.actions';

@Injectable({
  providedIn: 'root'
})
export class CompanyGuard implements CanActivate {

  constructor(private store: Store<AppState>) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      this.store.dispatch(CompanyActions.getCompany({ id: +route.params.id }));
      return of(true);
  }
  
}
