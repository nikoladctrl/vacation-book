import { DepartmentNewComponent } from './components/department-new/department-new.component';
import { DepartmentEditComponent } from './components/department-edit/department-edit.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { DepartmentsComponent } from './views/departments/departments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentGuard } from './resources/guards/department.guard';
import { DepartmentsGuard } from './resources/guards/departments.guard';

const routes: Routes = [
  { path: '', component: DepartmentsComponent, canActivate: [DepartmentsGuard], children: [
    { path: '', component: DepartmentListComponent },
    { path: ':id', component: DepartmentDetailComponent, canActivate: [DepartmentGuard], children: [
      { path: 'edit', component: DepartmentEditComponent },
    ]},
    { path: 'new', component: DepartmentNewComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
