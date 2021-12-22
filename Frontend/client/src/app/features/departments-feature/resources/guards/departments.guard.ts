import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppState } from 'src/app/store';
import * as DepartmentActions from '../../state/department.actions';
import * as fromDepartmentSelectors from '../../state/department.selectors';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsGuard implements CanActivate {

  constructor(private store: Store<AppState>) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
      this.store.dispatch(DepartmentActions.getDepartments());
      return this.store.select(fromDepartmentSelectors.selectIsLoaded).pipe(filter((isLoaded) => isLoaded));
  }
  
}
