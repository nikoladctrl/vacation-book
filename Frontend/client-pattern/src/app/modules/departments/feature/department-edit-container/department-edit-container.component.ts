import { Observable } from 'rxjs';
import { Component, OnInit, Output } from '@angular/core';

import { Department } from '../../model/department.model';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as DepartmentActions from '../../data/department.actions';
import * as fromDepartmentSelectors from '../../data/department.selectors';

@Component({
  selector: 'app-department-edit-container',
  templateUrl: './department-edit-container.component.html',
  styleUrls: ['./department-edit-container.component.css']
})
export class DepartmentEditContainerComponent implements OnInit {

  department$: Observable<Department>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.department$ = this.store.select(fromDepartmentSelectors.selectCurrentDepartment);
  }

  onOutputDepartment(outputDepartment: { departmentId?: number, department?: Department, type: 'DELETE' | 'UPDATE' }) {
    if (outputDepartment.type === 'UPDATE') {
      // this.store.dispatch(DepartmentActions.updateDepartment({ department: }));
    } else {
      this.store.dispatch(DepartmentActions.deleteDepartment({ id: outputDepartment?.departmentId }));
    }
  }

}
