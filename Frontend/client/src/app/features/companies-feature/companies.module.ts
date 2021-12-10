import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './views/companies/companies.component';


@NgModule({
  declarations: [
    CompaniesComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule
  ]
})
export class CompaniesModule { }
