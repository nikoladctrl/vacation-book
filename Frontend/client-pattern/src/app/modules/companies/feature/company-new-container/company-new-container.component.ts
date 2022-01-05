import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Company } from '../../model/company.model';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromCompanySelectors from '../../data/company.selectors';
import * as CompanyActions from '../../data/company.actions';
import { Business } from '../../model/business.model';

@Component({
  selector: 'app-company-new-container',
  templateUrl: './company-new-container.component.html',
  styleUrls: ['./company-new-container.component.css']
})
export class CompanyNewContainerComponent implements OnInit {

  businesses$: Observable<Business[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.businesses$ = this.store.select(fromCompanySelectors.selectBusinesses);
  }

  onOutputCompany(company: Company) {
    this.store.dispatch(CompanyActions.addCompany({ company }));
  }

}
