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
    DepartmentsRoutingModule
  ]
})
export class DepartmentsModule { }
