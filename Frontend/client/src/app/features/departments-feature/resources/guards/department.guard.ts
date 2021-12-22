import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/store';
import * as DepartmentActions from '../../state/department.actions';

@Injectable({
  providedIn: 'root'
})
export class DepartmentGuard implements CanActivate {

  constructor(private store: Store<AppState>) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
      this.store.dispatch(DepartmentActions.getDepartment({ id: +route.params.id }));
      return of(true);
  }
  
}
