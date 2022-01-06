import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Company } from '../../model/company.model';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyItemComponent {

  @Input() company: Company;

}
