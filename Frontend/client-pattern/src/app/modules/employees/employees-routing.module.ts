import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from '../empoyees/ui/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from '../empoyees/ui/employee-edit/employee-edit.component';
import { EmployeeNewComponent } from '../empoyees/ui/employee-new/employee-new.component';
import { EmployeeListComponent } from './ui/employee-list/employee-list.component';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'new', component: EmployeeNewComponent },
  { path: ':id', component: EmployeeDetailComponent },
  { path: ':id/edit', component: EmployeeEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
