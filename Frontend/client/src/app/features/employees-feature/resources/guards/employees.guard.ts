import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { AppState } from 'src/app/store';
import * as EmployeeActions from '../../state/employee.actions';
import * as fromEmployeeSelectors from '../../state/employee.selectors';

@Injectable({
  providedIn: 'root'
})
export class EmployeesGuard implements CanActivate {

  constructor(private store: Store<AppState>) { }

  canActivate(route: ActivatedRouteSnapshot) {
    this.store.dispatch(EmployeeActions.getEmployees());
    return this.store.select(fromEmployeeSelectors.selectIsLoaded).pipe(filter((isLoaded) => isLoaded));
  }
  
}
