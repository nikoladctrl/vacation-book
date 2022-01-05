import { selectEditViewModel } from './../../data/company.selectors';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Company } from '../../model/company.model';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromCompanySelectors from '../../data/company.selectors';
import * as CompanyActions from '../../data/company.actions';
import { Update } from '@ngrx/entity';
import { Business } from '../../model/business.model';

@Component({
  selector: 'app-company-edit-container',
  templateUrl: './company-edit-container.component.html',
  styleUrls: ['./company-edit-container.component.css']
})
export class CompanyEditContainerComponent implements OnInit {

  vm$: Observable<{ company: Company, businesses: Business[] }>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.vm$ = this.store.select(fromCompanySelectors.selectEditViewModel);
  }

  onOutputCompany(fromChild: { company?: Company, companyId?: number, type: 'DELETE' | 'UPDATE' }) {
    if (fromChild.type === 'UPDATE') {
      // this.store.dispatch(CompanyActions.updateCompany({  }));
    } else {
      this.store.dispatch(CompanyActions.deleteCompany({ id: fromChild?.companyId }));
    }
  }

}
