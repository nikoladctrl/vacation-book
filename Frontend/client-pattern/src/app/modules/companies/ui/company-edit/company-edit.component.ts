import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company } from '../../model/company.model';
import { Business } from '../../model/business.model';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyEditComponent implements OnInit {
  
  @Input() vm: {company: Company, businesses: Business[]};
  @Output() outputCompany = new EventEmitter<{ company?: Company, companyId?: number, type: 'UPDATE' | 'DELETE' }>(null)

  editCompanyForm: FormGroup;

  ngOnInit(): void {
    this.editCompanyForm = this.initializeForm();
  }

  onSubmit() {
    this.outputCompany.emit({ company: this.editCompanyForm.value, type: 'UPDATE' });
  }

  onDelete(companyId: number) {
    this.outputCompany.emit({companyId : companyId, type: 'DELETE' });
  }

  private initializeForm() {
    return new FormGroup({
      id: new FormControl(this.vm.company.id, [Validators.required]),
      name: new FormControl(this.vm.company.name, [Validators.required]),
      businessId: new FormControl(this.vm.company.business.id, [Validators.required]),
      address: new FormControl(this.vm.company.address),
      country: new FormControl(this.vm.company.country, [Validators.required]),
      image: new FormControl(this.vm.company.image, [Validators.pattern(/\.(jpe?g|png|gif|bmp)$/i)])
    });
  }
  
}
