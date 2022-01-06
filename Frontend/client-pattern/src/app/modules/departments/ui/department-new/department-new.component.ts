import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company } from 'src/app/modules/companies/model/company.model';

@Component({
  selector: 'app-department-new',
  templateUrl: './department-new.component.html',
  styleUrls: ['./department-new.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepartmentNewComponent {

  @Output() outputCompany = new EventEmitter<Company>(null);


  onCreate(company: Company) {
    this.outputCompany.emit(company);
  }

}
