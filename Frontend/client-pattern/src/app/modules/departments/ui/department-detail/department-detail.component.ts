import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Department } from '../../model/department.model';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepartmentDetailComponent {

  @Input() department: Department;

}
