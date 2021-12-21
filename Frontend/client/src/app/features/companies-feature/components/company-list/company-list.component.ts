import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Company } from 'src/app/models/company.model';
import { AppState } from 'src/app/store';
import * as fromCompanySelectors from '../../state/company.selectors';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies$: Observable<Company[]>;

  constructor(private store: Store<AppState>, private router:Router) { }

  ngOnInit(): void {
    this.companies$ = this.store.select(fromCompanySelectors.selectCompanies);
  }

}
