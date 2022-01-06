import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Company } from '../../model/company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyListComponent {

  @Input() companies: Company[];
  
}
