import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './views/departments/departments.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { DepartmentItemComponent } from './components/department-item/department-item.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { DepartmentNewComponent } from './components/department-new/department-new.component';
import { DepartmentEditComponent } from './components/department-edit/department-edit.component';
import { DepartmentSearchComponent } from './components/department-search/department-search.component';
import { StoreModule } from '@ngrx/store';
import * as fromDepartment from './state/department.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DepartmentEffects } from './state/department.effects';


@NgModule({
  declarations: [
    DepartmentsComponent,
    DepartmentDetailComponent,
    DepartmentItemComponent,
    DepartmentListComponent,
    DepartmentNewComponent,
    DepartmentEditComponent,
    DepartmentSearchComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    StoreModule.forFeature(fromDepartment.departmentFeatureKey, fromDepartment.reducer),
    EffectsModule.forFeature([DepartmentEffects])
  ]
})
export class DepartmentsModule { }
