import { Observable } from 'rxjs';
import { selectCurrentCompany } from './../../state/company.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromCompaniesSelectors from '../../state/company.selectors';
import { Department } from 'src/app/models/department.model';

@Component({
  selector: 'app-company-detail-departments',
  templateUrl: './company-detail-departments.component.html',
  styleUrls: ['./company-detail-departments.component.css']
})
export class CompanyDetailDepartmentsComponent implements OnInit {

  departments$: Observable<Department[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.departments$ = this.store.select(fromCompaniesSelectors.selectCurrentCompanyDepartments);
  }

}
