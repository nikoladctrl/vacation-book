import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Company } from 'src/app/models/company.model';
import { AppState } from 'src/app/store';
import * as fromCompanySelectors from '../../state/company.selectors';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  company$: Observable<Company>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.company$ = this.store.select(fromCompanySelectors.selectCurrentCompany);
  }

}
