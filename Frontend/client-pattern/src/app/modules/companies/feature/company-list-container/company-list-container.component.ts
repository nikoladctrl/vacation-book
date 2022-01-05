import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromCompanySelectors from '../../data/company.selectors';
import { Company } from '../../model/company.model';

@Component({
  selector: 'app-company-list-container',
  templateUrl: './company-list-container.component.html',
  styleUrls: ['./company-list-container.component.css']
})
export class CompanyListContainerComponent implements OnInit {

  companies$: Observable<Company[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.companies$ = this.store.select(fromCompanySelectors.selectAllCompanies);
  }

}
