import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from '@angular/core';
import { Business } from 'src/app/shared/models/business.model';
import { Company } from '../../model/company.model';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyEditComponent {

  @Input() viewModel: { company: Company, businesses: Business[] };
  @Output() outputCompany: { company?: Company, companyId: number, type: 'DELETE'| 'UPDATE' };

}
