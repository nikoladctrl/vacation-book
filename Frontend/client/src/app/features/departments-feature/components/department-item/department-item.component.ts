import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Department } from 'src/app/shared/models/department.model';

@Component({
  selector: 'app-department-item',
  templateUrl: './department-item.component.html',
  styleUrls: ['./department-item.component.css']
})
export class DepartmentItemComponent {

  @Input() department: Department;
  @Output() isDelete = new EventEmitter<number>(null);


  onDelete(departmentId: number) {
    this.isDelete.emit(departmentId);
  }
  
}
