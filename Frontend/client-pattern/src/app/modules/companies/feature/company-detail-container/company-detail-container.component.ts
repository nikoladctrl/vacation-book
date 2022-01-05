import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Company } from '../../model/company.model';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromCompanySelectors from '../../data/company.selectors';

@Component({
  selector: 'app-company-detail-container',
  templateUrl: './company-detail-container.component.html',
  styleUrls: ['./company-detail-container.component.css']
})
export class CompanyDetailContainerComponent implements OnInit {

  company$: Observable<Company>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.company$ = this.store.select(fromCompanySelectors.selectCurrentCompany);
  }

}
