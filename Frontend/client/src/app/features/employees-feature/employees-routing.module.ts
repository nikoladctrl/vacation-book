import { EmployeesGuard } from './resources/guards/employees.guard';
import { EmployeesComponent } from './views/employees/employees.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeNewComponent } from './components/employee-new/employee-new.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent, canActivate: [EmployeesGuard], children: [
    { path: '', component: EmployeeListComponent },
    { path: 'new', component: EmployeeNewComponent },
    { path: ':id', component: EmployeeDetailComponent, children: [
      { path: 'edit', component: EmployeeEditComponent },
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
