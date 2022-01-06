import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Company } from '../../model/company.model';
import { Business } from 'src/app/shared/models/business.model';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as CompanyActions from '../../data/company.actions';

@Component({
  selector: 'app-company-edit-container',
  templateUrl: './company-edit-container.component.html',
  styleUrls: ['./company-edit-container.component.css']
})
export class CompanyEditContainerComponent implements OnInit {

  vm$: Observable<{ company: Company, businesses: Business[] }>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.vm$ = this.store.select(fromCompanySelectors.getViewModel);
  }

  onOutputCompany(outputCompany: { company?: Company, companyId?: number, type: 'DELETE' | 'UPDATE' }) {
    if (outputCompany.type === 'UPDATE') {
      // this.store.dispatch(CompanyActions.updateCompany({ company: outputCompany?.company }));
    } else {
      // this.store.dispatch(CompanyActions.deleteCompany({ id: outputCompany?.companyId }));
    }
  }
}
