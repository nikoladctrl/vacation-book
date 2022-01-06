import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromCompany from './data/company.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffects } from './data/company.effects';
import { CompanyListContainerComponent } from './feature/company-list-container/company-list-container.component';
import { CompanyDetailContainerComponent } from './feature/company-detail-container/company-detail-container.component';
import { CompanyEditContainerComponent } from './feature/company-edit-container/company-edit-container.component';
import { CompanyNewContainerComponent } from './feature/company-new-container/company-new-container.component';
import { CompanyDetailComponent } from './ui/company-detail/company-detail.component';
import { CompanyNewComponent } from './ui/company-new/company-new.component';
import { CompanyEditComponent } from './ui/company-edit/company-edit.component';
import { CompanyListComponent } from './ui/company-list/company-list.component';
import { CompanyItemComponent } from './ui/company-item/company-item.component';


@NgModule({
  declarations: [
    CompanyListContainerComponent,
    CompanyDetailContainerComponent,
    CompanyEditContainerComponent,
    CompanyNewContainerComponent,
    CompanyDetailComponent,
    CompanyNewComponent,
    CompanyEditComponent,
    CompanyListComponent,
    CompanyItemComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    StoreModule.forFeature(fromCompany.companiesFeatureKey, fromCompany.reducer),
    EffectsModule.forFeature([CompanyEffects])
  ]
})
export class CompaniesModule { }
