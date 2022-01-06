import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {

  @Input() employees: Employee[];

}
