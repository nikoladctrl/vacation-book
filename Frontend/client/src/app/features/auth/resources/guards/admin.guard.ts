import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AppState } from 'src/app/store';
import * as fromAuthSelectors from '../../../../store/selectors/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(private store: Store<AppState>) { }

  canActivate() {
    return (this.store.select(fromAuthSelectors.selectIsAdmin)) ? true : false;
  }
  
}
