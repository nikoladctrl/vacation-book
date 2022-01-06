import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from '@angular/core';
import { Business } from 'src/app/shared/models/business.model';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeEditComponent {

  @Input() employee: Employee;
  @Output() outputEmployee: { type: 'DELETE' | 'UPDATE', employeeId?: number, employee?: Employee };

}
