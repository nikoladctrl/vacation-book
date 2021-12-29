import { createReducer, on } from '@ngrx/store';
import { Employee } from 'src/app/shared/models/employee.model';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  verifiedUser: Employee;
  error: Error;
}

export const initialState: State = {
  verifiedUser: null,
  error: null,
};

export const reducer = createReducer(
  initialState,

  on(AuthActions.login, state => state),
  on(AuthActions.loginSuccess, (state, action) => {
    return {
      ...state,
      verifiedUser: action.employee
    };
  }),
  on(AuthActions.loginFailure, (state, action) => {
    return {  
      ...state,
      error: action.error
    };
  }),
);
