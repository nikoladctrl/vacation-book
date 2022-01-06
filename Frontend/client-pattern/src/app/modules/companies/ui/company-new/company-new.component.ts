import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Company } from '../../model/company.model';

@Component({
  selector: 'app-company-new',
  templateUrl: './company-new.component.html',
  styleUrls: ['./company-new.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyNewComponent {

  @Output() create = new EventEmitter<Company>(null);

}
