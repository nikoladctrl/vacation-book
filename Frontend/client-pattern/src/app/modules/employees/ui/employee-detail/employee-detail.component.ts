import { Employee } from './../../model/employee.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {

  @Input() employee: Employee;

}
