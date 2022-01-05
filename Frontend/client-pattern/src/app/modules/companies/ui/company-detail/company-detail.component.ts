import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Company } from '../../model/company.model';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyDetailComponent {

  @Input() company: Company;

}
