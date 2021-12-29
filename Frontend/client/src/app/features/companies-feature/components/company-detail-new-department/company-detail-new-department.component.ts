import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from 'src/app/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Company } from 'src/app/shared/models/company.model';
import { Subscription } from 'rxjs';

import * as fromCompanySelectors from '../../state/company.selectors';
import * as CompanyActions from '../../state/company.actions';

@Component({
  selector: 'app-company-detail-new-department',
  templateUrl: './company-detail-new-department.component.html',
  styleUrls: ['./company-detail-new-department.component.css']
})
export class CompanyDetailNewDepartmentComponent implements OnInit, OnDestroy {

  createDepartmentForm: FormGroup;
  company: Company;
  subscriptions: Subscription[] = [];
  
  constructor(private store: Store<AppState>) { }
  
  ngOnInit(): void {
    this.subscriptions.push(this.store.select(fromCompanySelectors.selectCurrentCompany).subscribe(company => this.company = company));
    this.createDepartmentForm = this.initializeForm();
  }
  
  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private initializeForm() {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(30)])
    });
  }

  onSubmit() {
    const department = {
      name: this.createDepartmentForm.get('name').value,
      companyId: this.company.id
    };
    this.store.dispatch(CompanyActions.createCompanyDepartment({ department: department }));
  }

}
