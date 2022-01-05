import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailContainerComponent } from './feature/department-detail-container/department-detail-container.component';
import { DepartmentEditContainerComponent } from './feature/department-edit-container/department-edit-container.component';
import { DepartmentListContainerComponent } from './feature/department-list-container/department-list-container.component';

const routes: Routes = [
  { path: '', component: DepartmentListContainerComponent },
  { path: 'new', component: DepartmentDetailContainerComponent },
  { path: ':id', component: DepartmentDetailContainerComponent },
  { path: ':id/edit', component: DepartmentEditContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
