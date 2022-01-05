import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailContainerComponent } from './feature/company-detail-container/company-detail-container.component';
import { CompanyEditContainerComponent } from './feature/company-edit-container/company-edit-container.component';
import { CompanyListContainerComponent } from './feature/company-list-container/company-list-container.component';
import { CompanyNewContainerComponent } from './feature/company-new-container/company-new-container.component';
import { CompaniesResolver } from './feature/resolvers/companies.resolver';
import { CompanyResolver } from './feature/resolvers/company.resolver';

const routes: Routes = [
  { path: '', component: CompanyListContainerComponent, resolve: { companies: CompaniesResolver } },
  { path: 'new', component: CompanyNewContainerComponent },
  { path: ':id', component: CompanyDetailContainerComponent, resolve: { company: CompanyResolver },
    children: [
      { path: 'edit', component: CompanyEditContainerComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
