import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeNewComponent {

  @Output() create = new EventEmitter<Employee>(); 
  // @Output() employee: Employee = new EventEmitter<Employee>(); 


  onSubmit(employee: Employee) {
    this.create.emit(employee);
  }

}
