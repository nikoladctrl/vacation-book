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

const routes: Routes = [
  { path: '', component: CompaniesComponent, canActivate: [CompaniesGuard], 
  children: [
    { path: '', component: CompanyListComponent },
    { path: ':id', component: CompanyDetailComponent, canActivate: [CompanyGuard], children: [
      { path: 'edit', component: CompanyEditComponent },
      { path: 'departments', component: CompanyDetailDepartmentsComponent },
      { path: 'employees', component: CompanyDetailEmployeesComponent },
    ] },
    { path: 'new', component: CompanyNewComponent },
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
