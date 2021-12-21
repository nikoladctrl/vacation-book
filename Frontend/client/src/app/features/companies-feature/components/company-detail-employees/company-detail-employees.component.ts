import { Observable } from 'rxjs';
import { selectCurrentCompany } from './../../state/company.selectors';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store';
import * as fromCompaniesSelectors from '../../state/company.selectors';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-company-detail-employees',
  templateUrl: './company-detail-employees.component.html',
  styleUrls: ['./company-detail-employees.component.css']
})
export class CompanyDetailEmployeesComponent implements OnInit {

  employees$: Observable<Employee[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.employees$ = this.store.select(fromCompaniesSelectors.selectCurrentCompanyEmployees);
  }

}
