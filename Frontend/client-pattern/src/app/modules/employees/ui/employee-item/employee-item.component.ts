import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeItemComponent {

  @Input() employee: Employee;

}
