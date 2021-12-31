import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailComponent } from './ui/department-detail/department-detail.component';
import { DepartmentEditComponent } from './ui/department-edit/department-edit.component';
import { DepartmentListComponent } from './ui/department-list/department-list.component';

const routes: Routes = [
  { path: '', component: DepartmentListComponent },
  { path: 'new', component: DepartmentDetailComponent },
  { path: ':id', component: DepartmentDetailComponent },
  { path: ':id/edit', component: DepartmentEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
