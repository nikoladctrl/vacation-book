import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Department } from '../../model/department.model';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepartmentListComponent {

  @Input() departments: Department[];

}
