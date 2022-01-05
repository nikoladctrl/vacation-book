import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompanyListComponent } from './ui/company-list/company-list.component';
import { CompanyDetailComponent } from './ui/company-detail/company-detail.component';
import { CompanyEditComponent } from './ui/company-edit/company-edit.component';
import { CompanyNewComponent } from './ui/company-new/company-new.component';
import { CompanyListContainerComponent } from './feature/company-list-container/company-list-container.component';
import { CompanyDetailContainerComponent } from './feature/company-detail-container/company-detail-container.component';
import { CompanyEditContainerComponent } from './feature/company-edit-container/company-edit-container.component';
import { CompanyNewContainerComponent } from './feature/company-new-container/company-new-container.component';
import { StoreModule } from '@ngrx/store';
import * as fromCompany from './data/company.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffects } from './data/company.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyEditComponent,
    CompanyNewComponent,
    CompanyListContainerComponent,
    CompanyDetailContainerComponent,
    CompanyEditContainerComponent,
    CompanyNewContainerComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature(fromCompany.companiesFeatureKey, fromCompany.reducer),
    EffectsModule.forFeature([CompanyEffects]),
  ]
})
export class CompaniesModule { }
