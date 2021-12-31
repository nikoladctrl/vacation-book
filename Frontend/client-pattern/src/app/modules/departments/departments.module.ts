import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromDepartment from './data/department.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DepartmentEffects } from './data/department.effects';
import { DepartmentListComponent } from './ui/department-list/department-list.component';
import { DepartmentDetailComponent } from './ui/department-detail/department-detail.component';
import { DepartmentEditComponent } from './ui/department-edit/department-edit.component';
import { DepartmentNewComponent } from './ui/department-new/department-new.component';


@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentDetailComponent,
    DepartmentEditComponent,
    DepartmentNewComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    StoreModule.forFeature(fromDepartment.departmentFeatureKey, fromDepartment.reducer),
    EffectsModule.forFeature([DepartmentEffects])
  ]
})
export class DepartmentsModule { }
