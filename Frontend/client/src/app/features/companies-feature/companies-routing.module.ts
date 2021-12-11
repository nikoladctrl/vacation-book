import { CompanyNewComponent } from './components/company-new/company-new.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompaniesComponent } from './views/companies/companies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { CompanyEditComponent } from './components/company-edit/company-edit.component';

const routes: Routes = [
  { path: '', component: CompaniesComponent, children: [
    { path: '', component: CompanyListComponent },
    { path: ':id', component: CompanyDetailComponent, children: [
      { path: 'edit', component: CompanyEditComponent },
    ] },
    { path: 'new', component: CompanyNewComponent },
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
