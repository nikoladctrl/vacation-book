import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/store';
import * as EmployeeActions from '../../state/employee.actions';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanActivate {
  
  constructor(private store: Store<AppState>) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    this.store.dispatch(EmployeeActions.getEmployee({ id: +route.params.id }));
    return of(true);
  }
  
}
