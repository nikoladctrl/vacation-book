import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Employee } from 'src/app/shared/models/employee.model';
import * as fromAuth from '../reducers/auth.reducer';
import { State } from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export const selectUser = createSelector(
  selectAuthState,
  (state: State) => state.verifiedUser
);

export const selectIsAdmin = createSelector(
  selectAuthState,
  selectUser,
  (state: State, selectUser: Employee): boolean => selectUser.image === 'ADMIN'
);
