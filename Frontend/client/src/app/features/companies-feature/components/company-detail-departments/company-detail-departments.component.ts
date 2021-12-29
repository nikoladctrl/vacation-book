import { selectCurrentCompany, selectCurrentCompanyDepartments } from './../../state/company.selectors';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Department } from 'src/app/shared/models/department.model';
import * as DepartmentActions from '../../../departments-feature/state/department.actions';
import * as fromCompanySelectors from '../../state/company.selectors';

@Component({
  selector: 'app-company-detail-departments',
  templateUrl: './company-detail-departments.component.html',
  styleUrls: ['./company-detail-departments.component.css']
})
export class CompanyDetailDepartmentsComponent implements OnInit {

  companyId: number;
  departments$: Observable<Department[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.departments$ = this.store.select(fromCompanySelectors.selectCurrentCompanyDepartments);
  }

}
