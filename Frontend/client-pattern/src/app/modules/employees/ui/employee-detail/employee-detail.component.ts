import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailComponent {

  @Input() employee: Employee;

}
