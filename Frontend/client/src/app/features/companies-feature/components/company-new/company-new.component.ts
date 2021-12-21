import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Business } from 'src/app/models/business.model';
import { AppState } from 'src/app/store';
import * as fromCompanySelectors from '../../state/company.selectors';
import * as CompanyActions from '../../state/company.actions';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-company-new',
  templateUrl: './company-new.component.html',
  styleUrls: ['./company-new.component.css']
})
export class CompanyNewComponent implements OnInit {

  businesses$: Observable<Business[]>;

  createCompanyForm: FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.businesses$ = this.store.select(fromCompanySelectors.selectBusinesses);
    this.createCompanyForm = this.initializeForm();
  }

  private initializeForm() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      businessId: new FormControl('', [Validators.required]),
      address: new FormControl(''),
      country: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.createCompanyForm.valid) {
      this.createCompanyForm.get('businessId').setValue(parseInt(this.createCompanyForm.get('businessId').value));
      this.store.dispatch(CompanyActions.createCompany({ company: this.createCompanyForm.value }));
    }
  }

}
