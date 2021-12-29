import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromDepartmentSelectors from '../../state/department.selectors';
import { Department } from 'src/app/shared/models/department.model';
import * as DepartmentActions from '../../state/department.actions';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  p: number = 1;
  departments$: Observable<Department[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.departments$ = this.store.select(fromDepartmentSelectors.selectDepartments);
  }

  onDelete(departmentId: number) {
    if (departmentId !== null && departmentId > 0) {
      this.store.dispatch(DepartmentActions.deleteDepartment({ id : departmentId }));
    }
  }

}
