import { FormGroup, FormControl, Validators, NgControlStatus } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromCompanySelectors from '../../state/company.selectors';
import { Company } from 'src/app/shared/models/company.model';

@Component({
  selector: 'app-company-detail-new-employee',
  templateUrl: './company-detail-new-employee.component.html',
  styleUrls: ['./company-detail-new-employee.component.css']
})
export class CompanyDetailNewEmployeeComponent implements OnInit, OnDestroy {

  createEmployeeForm: FormGroup;
  company: Company;
  noDeps: boolean = false;
  subscriptions: Subscription[] = [];

  constructor(private store: Store<AppState>) { }
  
  ngOnInit(): void {
    this.subscriptions.push(
      this.store.select(fromCompanySelectors.selectCurrentCompany)
        .subscribe(company => {
          console.log
          this.company = company; 
          this.noDeps = (this.company.departments === undefined || this.company.departments === null || this.company.departments.length === 0) ? true : false; 
        })
    );
    this.createEmployeeForm = this.initializeForm();
    this.listenToForm();
  }
    
  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private initializeForm() {
    return new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required, this.validateBirth.bind(this)]),
      yearsOfService: new FormControl('', [Validators.required, this.validateYears.bind(this)]),
      departmentId: new FormControl(''),
    });
  }

  private validateBirth(control: FormControl) {
    if (control.dirty && (new Date().getFullYear() - this.createEmployeeForm.get('birthDate').value) < 18) {
      return { checkYears : { invalidYear : true }};
    }
    return null;
  }

  private validateYears(control: FormControl) {
    // console.log(new Date().getFullYear() - this.createEmployeeForm.get('birthDate').value - 18, control.value)
    if ((control.dirty && control.value > (new Date().getFullYear() - this.createEmployeeForm.get('birthDate').value - 18)) || (control.value < 0 && control.dirty)) {
      return { checkYears : { invalidYear : true }};
    }
    return null;
  }

  listenToForm() {
    this.subscriptions.push(
      this.createEmployeeForm
        .valueChanges.subscribe(form => {
          if (form.yearsOfService !== null && form.yearsOfService !== undefined && form.birthDate !== null) {
            if (new Date().getFullYear() - 18 - form.birthDate) {
              return { checkYears : { invalid : true } };
            }
          }
          return null;
        })
    );
  }

  onSubmit() {
    const employee = {
      firstName: this.createEmployeeForm.get('firstName').value,
      lastName: this.createEmployeeForm.get('lastName').value,
      birthDate: this.createEmployeeForm.get('birthDate').value,
      yearsOfService: this.createEmployeeForm.get('yearsOfService').value,
      departmentId: this.createEmployeeForm.get('departmentId').value,
      companyId: this.company.id
    };
    console.log(employee);
  }

}
