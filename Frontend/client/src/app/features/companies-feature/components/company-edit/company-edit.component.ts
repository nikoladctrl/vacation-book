import { ofType } from '@ngrx/effects';
import { getBusinesses } from './../../state/company.actions';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Business } from 'src/app/models/business.model';
import * as fromCompanySelectors from '../../state/company.selectors';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Company } from 'src/app/models/company.model';
import * as CompanyActions from '../../state/company.actions';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

  company: Company;
  businesses$: Observable<Business[]>;
  editCompanyForm: FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(fromCompanySelectors.selectCurrentCompany).subscribe(company => this.company = company);
    this.businesses$ = this.store.select(fromCompanySelectors.selectBusinesses);
    this.editCompanyForm = this.initializeForm();
  }

  private initializeForm() {
    return new FormGroup({
      id: new FormControl(this.company.id, [Validators.required]),
      name: new FormControl(this.company.name, [Validators.required]),
      businessId: new FormControl(this.company['business'], [Validators.required]),
      address: new FormControl(this.company.address),
      country: new FormControl(this.company.country, [Validators.required]),
    })

  }

  onSubmit() {
    this.editCompanyForm.get('businessId').setValue(+this.editCompanyForm.get('businessId').value);

    this.store.dispatch(CompanyActions.editCompany({ id: this.company.id, company: this.editCompanyForm.value }));
  }


  onDelete() {
    this.store.dispatch(CompanyActions.deleteCompany({ id: this.company.id }));
  }

}
