import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './views/employees/employees.component';
import { EmployeeSearchComponent } from './components/employee-search/employee-search.component';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeNewComponent } from './components/employee-new/employee-new.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { StoreModule } from '@ngrx/store';
import * as fromEmployee from './state/employee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './state/employee.effects';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeSearchComponent,
    EmployeeItemComponent,
    EmployeeListComponent,
    EmployeeNewComponent,
    EmployeeEditComponent,
    EmployeeDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    EmployeesRoutingModule,
    StoreModule.forFeature(fromEmployee.employeeFeatureKey, fromEmployee.reducer),
    EffectsModule.forFeature([EmployeeEffects])
  ]
})
export class EmployeesModule { }
