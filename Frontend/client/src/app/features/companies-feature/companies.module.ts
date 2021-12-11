import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './views/companies/companies.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { CompanyItemComponent } from './components/company-item/company-item.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyNewComponent } from './components/company-new/company-new.component';
import { CompanyEditComponent } from './components/company-edit/company-edit.component';
import { CompanySearchComponent } from './components/company-search/company-search.component';
import { StoreModule } from '@ngrx/store';
import * as fromCompany from './state/company.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffects } from './state/company.effects';


@NgModule({
  declarations: [
    CompaniesComponent,
    CompanyDetailComponent,
    CompanyItemComponent,
    CompanyListComponent,
    CompanyNewComponent,
    CompanyEditComponent,
    CompanySearchComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule, 
    RouterModule, 
    StoreModule.forFeature(fromCompany.companyFeatureKey, fromCompany.reducer), 
    EffectsModule.forFeature([CompanyEffects]),
  ]
})
export class CompaniesModule { }
