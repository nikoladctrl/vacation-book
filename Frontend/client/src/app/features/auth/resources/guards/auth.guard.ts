import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromAuthSelectors from '../../../../store/selectors/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store<AppState>) { }

  canActivate() {
    const user = this.store.select(fromAuthSelectors.selectUser);
    return (user === null) ? false : true;
  }
  
}
