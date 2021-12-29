import { CompanyDetailNewEmployeeComponent } from './components/company-detail-new-employee/company-detail-new-employee.component';
import { CompaniesGuard } from './resources/guards/companies.guard';
import { CompanyNewComponent } from './components/company-new/company-new.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompaniesComponent } from './views/companies/companies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { CompanyEditComponent } from './components/company-edit/company-edit.component';
import { CompanyGuard } from './resources/guards/company.guard';
import { CompanyDetailDepartmentsComponent } from './components/company-detail-departments/company-detail-departments.component';
import { CompanyDetailEmployeesComponent } from './components/company-detail-employees/company-detail-employees.component';
import { CompanyDetailNewDepartmentComponent } from './components/company-detail-new-department/company-detail-new-department.component';
import { AdminGuard } from '../auth/resources/guards/admin.guard';

const routes: Routes = [
  { path: '', component: CompaniesComponent, canActivate: [CompaniesGuard],
  children: [
    { path: '', component: CompanyListComponent, canActivate: [AdminGuard] }, 
    { path: 'new', component: CompanyNewComponent },
    { path: ':id', component: CompanyDetailComponent, canActivate: [CompanyGuard], children: [
      { path: 'edit', component: CompanyEditComponent },
      { path: 'departments', component: CompanyDetailDepartmentsComponent },
      { path: 'new-department', component: CompanyDetailNewDepartmentComponent },
      { path: 'employees', component: CompanyDetailEmployeesComponent },
      { path: 'new-employee', component: CompanyDetailNewEmployeeComponent }
    ]},
    { path: '**', redirectTo: '' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
