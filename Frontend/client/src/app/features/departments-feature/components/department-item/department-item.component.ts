import { Component, Input, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department.model';

@Component({
  selector: 'app-department-item',
  templateUrl: './department-item.component.html',
  styleUrls: ['./department-item.component.css']
})
export class DepartmentItemComponent {

  @Input() department: Department;
  
}
