import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Department } from '../../model/department.model';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepartmentEditComponent {

  @Input() department: Department;
  @Output() outputDepartment = new EventEmitter<{ department?: Department, departmentId?: number, type: 'DELETE' | 'UPDATE' }>(null);


  onUpdate(department: Department) {
    this.outputDepartment.emit({ department: department, type: 'UPDATE' });
  }

  onDelete(departmentId: number) {
    this.outputDepartment.emit({ departmentId: departmentId, type: 'DELETE' });
  }
  
}
