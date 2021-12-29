import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import * as CompanyActions from '../../features/companies-feature/state/company.actions';
import * as DepartmentActions from '../../features/departments-feature/state/department.actions';
import * as EmployeeActions from '../../features/employees-feature/state/employee.actions';



@Injectable()
export class NotificationEffects {

  sendCompanyCreatedSuccessNotification$ = createEffect(() => 
    this.actions$.pipe(
        ofType(CompanyActions.createCompanySuccess),
        tap((action) => this.toastrService.success(`Company ${action.company.name} is successfully created!`)),
    ), { dispatch : false }
  );

  sendCompanyUpdatedSuccessNotification$ = createEffect(() => 
    this.actions$.pipe(
        ofType(CompanyActions.editCompanySuccess),
        tap((action) => this.toastrService.info(`Company ${action.company.name} is successfully updated!`)),
    ), { dispatch : false }
  );

  sendCompanyDeletedSuccessNotification$ = createEffect(() => 
  this.actions$.pipe(
      ofType(CompanyActions.deleteCompanySuccess),
      tap(() => this.toastrService.info(`Company is successfully deleted!`)),
  ), { dispatch : false }
);
  
  sendDepartmentCreatedSuccessNotification$ = createEffect(() => 
    this.actions$.pipe(
        ofType(DepartmentActions.createDepartmentSuccess),
        tap((action) => this.toastrService.success(`${action.department.name} is successfully created!`)),
    ), { dispatch : false }
  );

  sendDepartmentUpdatedSuccessNotification$ = createEffect(() => 
    this.actions$.pipe(
        ofType(DepartmentActions.editDepartmentSuccess),
        tap((action) => this.toastrService.info(`${action.department.name} is successfully updated!`)),
    ), { dispatch : false }
  );

  sendDepartmentDeletedSuccessNotification$ = createEffect(() => 
    this.actions$.pipe(
        ofType(DepartmentActions.deleteDepartmentSuccess),
        tap(() => this.toastrService.info(`Department is successfully deleted!`)),
    ), { dispatch : false }
  );

  sendEmployeeCreatedSuccessNotification$ = createEffect(() => 
    this.actions$.pipe(
        ofType(EmployeeActions.createEmployeeSuccess),
        tap((action) => this.toastrService.success(`${action.employee.firstName} ${action.employee.lastName} is successfully created!`)),
    ), { dispatch : false }
  );

  sendEmployeeUpdatedSuccessNotification$ = createEffect(() => 
    this.actions$.pipe(
        ofType(EmployeeActions.editEmployeeSuccess),
        tap((action) => this.toastrService.info(`${action.employee.firstName} ${action.employee.lastName} is successfully updated!`)),
    ), { dispatch : false }
  );


  sendFailureNotification$ = createEffect(() => 
    this.actions$.pipe(
      ofType(
              CompanyActions.loadCompaniesFailure,
              CompanyActions.createCompanyFailure, 
              CompanyActions.editCompanyFailure, 
              CompanyActions.deleteCompanyFailure,
              CompanyActions.loadBusinessesFailure,
              DepartmentActions.loadDepartmentsFailure,
              DepartmentActions.createDepartmentFailure,
              DepartmentActions.editDepartmentFailure,
              DepartmentActions.deleteDepartmentFailure,
              EmployeeActions.loadEmployeesFailure,
              EmployeeActions.createEmployeeFailure,
              EmployeeActions.editEmployeeFailure,
              EmployeeActions.deleteEmployeeFailure),
        tap((action) => this.toastrService.error(`Error happened somewhere! ${action.error.message}`))
    ), { dispatch: false }
  );



  constructor(private actions$: Actions, private toastrService: ToastrService, private router: Router) {}

}
