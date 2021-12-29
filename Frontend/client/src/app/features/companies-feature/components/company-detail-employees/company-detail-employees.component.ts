import { Observable, of } from 'rxjs';
import { selectCurrentCompany } from './../../state/company.selectors';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store';
import * as fromCompaniesSelectors from '../../state/company.selectors';
import { Employee } from 'src/app/shared/models/employee.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-company-detail-employees',
  templateUrl: './company-detail-employees.component.html',
  styleUrls: ['./company-detail-employees.component.css']
})
export class CompanyDetailEmployeesComponent implements OnInit {

  p: number = 1;
  employees$: Observable<Employee[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.employees$ = this.store.select(fromCompaniesSelectors.selectCurrentCompanyEmployees);
  }

}
