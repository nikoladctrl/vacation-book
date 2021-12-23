import { ofType } from '@ngrx/effects';
import { getBusinesses } from './../../state/company.actions';
import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Business } from 'src/app/models/business.model';
import * as fromCompanySelectors from '../../state/company.selectors';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Company } from 'src/app/models/company.model';
import * as CompanyActions from '../../state/company.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  company: Company;
  businesses$: Observable<Business[]>;
  editCompanyForm: FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscriptions.push(this.store.select(fromCompanySelectors.selectCurrentCompany).subscribe(company => this.company = company));
    this.businesses$ = this.store.select(fromCompanySelectors.selectBusinesses);
    this.editCompanyForm = this.initializeForm();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private initializeForm() {
    return new FormGroup({
      id: new FormControl(this.company.id, [Validators.required]),
      name: new FormControl(this.company.name, [Validators.required]),
      businessId: new FormControl(this.company.business.id, [Validators.required]),
      address: new FormControl(this.company.address),
      country: new FormControl(this.company.country, [Validators.required]),
      image: new FormControl(this.company.image, [Validators.pattern(/\.(jpe?g|png|gif|bmp)$/i)])
    });
  }

  onSubmit() {
    this.editCompanyForm.get('businessId').setValue(parseInt(this.editCompanyForm.get('businessId').value));
    this.store.dispatch(CompanyActions.editCompany({ id: this.company.id, company: this.editCompanyForm.value }));
  }


  onDelete() {
    this.store.dispatch(CompanyActions.deleteCompany({ id: this.company.id }));
  }

}
