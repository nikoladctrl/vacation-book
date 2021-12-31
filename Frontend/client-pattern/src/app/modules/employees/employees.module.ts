import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromEmployee from './data/employee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './data/employee.effects';
import { EmployeeListComponent } from './ui/employee-list/employee-list.component';


@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    StoreModule.forFeature(fromEmployee.employeeFeatureKey, fromEmployee.reducer),
    EffectsModule.forFeature([EmployeeEffects])
  ]
})
export class EmployeesModule { }
