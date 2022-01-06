import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailContainerComponent } from './feature/employee-detail-container/employee-detail-container.component';
import { EmployeeEditContainerComponent } from './feature/employee-edit-container/employee-edit-container.component';
import { EmployeeListContainerComponent } from './feature/employee-list-container/employee-list-container.component';
import { EmployeeNewContainerComponent } from './feature/employee-new-container/employee-new-container.component';

const routes: Routes = [
  { path: '', component: EmployeeListContainerComponent },
  { path: 'new', component: EmployeeNewContainerComponent },
  { path: ':id', component: EmployeeDetailContainerComponent },
  { path: ':id/edit', component: EmployeeEditContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
