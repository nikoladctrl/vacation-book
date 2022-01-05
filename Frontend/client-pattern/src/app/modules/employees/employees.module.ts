import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import * as fromEmployee from './data/employee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './data/employee.effects';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListContainerComponent } from './feature/employee-list-container/employee-list-container.component';
import { EmployeeDetailContainerComponent } from './feature/employee-detail-container/employee-detail-container.component';
import { EmployeeNewContainerComponent } from './feature/employee-new-container/employee-new-container.component';
import { EmployeeEditContainerComponent } from './feature/employee-edit-container/employee-edit-container.component';
import { EmployeeItemComponent } from './ui/employee-item/employee-item.component';
import { EmployeeDetailComponent } from './ui/employee-detail/employee-detail.component';
import { EmployeeNewComponent } from './ui/employee-new/employee-new.component';
import { EmployeeEditComponent } from './ui/employee-edit/employee-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EmployeeListContainerComponent,
    EmployeeDetailContainerComponent,
    EmployeeNewContainerComponent,
    EmployeeEditContainerComponent,
    EmployeeItemComponent,
    EmployeeDetailComponent,
    EmployeeNewComponent,
    EmployeeEditComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromEmployee.employeesFeatureKey, fromEmployee.reducer),
    EffectsModule.forFeature([EmployeeEffects]),
  ]
})
export class EmployeesModule { }
