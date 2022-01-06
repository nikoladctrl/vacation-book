import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromEmployee from './data/employee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './data/employee.effects';
import { EmployeeListContainerComponent } from './feature/employee-list-container/employee-list-container.component';
import { EmployeeDetailContainerComponent } from './feature/employee-detail-container/employee-detail-container.component';
import { EmployeeEditContainerComponent } from './feature/employee-edit-container/employee-edit-container.component';
import { EmployeeNewContainerComponent } from './feature/employee-new-container/employee-new-container.component';
import { EmployeeNewComponent } from './ui/employee-new/employee-new.component';
import { EmployeeEditComponent } from './ui/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './ui/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './ui/employee-detail/employee-detail.component';
import { EmployeeItemComponent } from './ui/employee-item/employee-item.component';


@NgModule({
  declarations: [
    EmployeeListContainerComponent,
    EmployeeDetailContainerComponent,
    EmployeeEditContainerComponent,
    EmployeeNewContainerComponent,
    EmployeeNewComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeItemComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    StoreModule.forFeature(fromEmployee.employeesFeatureKey, fromEmployee.reducer),
    EffectsModule.forFeature([EmployeeEffects])
  ]
})
export class EmployeesModule { }
