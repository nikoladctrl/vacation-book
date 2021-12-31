import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailComponent } from './ui/company-detail/company-detail.component';
import { CompanyEditComponent } from './ui/company-edit/company-edit.component';
import { CompanyListComponent } from './ui/company-list/company-list.component';
import { CompanyNewComponent } from './ui/company-new/company-new.component';

const routes: Routes = [
  { path: '', component: CompanyListComponent },
  { path: 'new', component: CompanyNewComponent },
  { path: 'edit', component: CompanyEditComponent },
  { path: 'edit', component: CompanyDetailComponent, 
    children: [
      { path: 'departments', loadChildren: () => import('../departments/departments.module').then(m => m.DepartmentsModule) },
      { path: 'employees', loadChildren: () => import('../employees/employees.module').then(m => m.EmployeesModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
