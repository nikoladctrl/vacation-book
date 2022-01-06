import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Department } from '../../model/department.model';

@Component({
  selector: 'app-department-item',
  templateUrl: './department-item.component.html',
  styleUrls: ['./department-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepartmentItemComponent {

  @Input() department: Department;

}
