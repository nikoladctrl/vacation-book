import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentListComponent } from './ui/department-list/department-list.component';
import { DepartmentDetailComponent } from './ui/department-detail/department-detail.component';
import { DepartmentEditComponent } from './ui/department-edit/department-edit.component';
import { DepartmentNewComponent } from './ui/department-new/department-new.component';
import { StoreModule } from '@ngrx/store';
import * as fromDepartment from './data/department.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DepartmentEffects } from './data/department.effects';
import { DepartmentListContainerComponent } from './feature/department-list-container/department-list-container.component';
import { DepartmentNewContainerComponent } from './feature/department-new-container/department-new-container.component';
import { DepartmentEditContainerComponent } from './feature/department-edit-container/department-edit-container.component';
import { DepartmentDetailContainerComponent } from './feature/department-detail-container/department-detail-container.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentDetailComponent,
    DepartmentEditComponent,
    DepartmentNewComponent,
    DepartmentListContainerComponent,
    DepartmentNewContainerComponent,
    DepartmentEditContainerComponent,
    DepartmentDetailContainerComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromDepartment.departmentsFeatureKey, fromDepartment.reducer),
    EffectsModule.forFeature([DepartmentEffects]),
  ]
})
export class DepartmentsModule { }
