import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Business } from '../../model/business.model';
import { Company } from '../../model/company.model';

@Component({
  selector: 'app-company-new',
  templateUrl: './company-new.component.html',
  styleUrls: ['./company-new.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyNewComponent implements OnInit {
  
  @Input() businesses: Business[];
  @Output() outputCompany = new EventEmitter<Company>(null);
  
  createCompanyForm: FormGroup;
  
  ngOnInit(): void {
    this.createCompanyForm = this.initializeForm();
  }

  onSubmit() {
    if (this.createCompanyForm.valid) {
      this.createCompanyForm.get('businessId').setValue(parseInt(this.createCompanyForm.get('businessId').value));
      this.outputCompany.emit(this.createCompanyForm.value);
    }
  }

  private initializeForm() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      businessId: new FormControl('', [Validators.required]),
      address: new FormControl(''),
      country: new FormControl('', [Validators.required])
    });
  }

}
