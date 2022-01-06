import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromEmployeeSelectors from '../../data/employee.selectors';

@Component({
  selector: 'app-employee-edit-container',
  templateUrl: './employee-edit-container.component.html',
  styleUrls: ['./employee-edit-container.component.css']
})
export class EmployeeEditContainerComponent implements OnInit {

  employee$: Observable<Employee>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.employee$ = this.store.select(fromEmployeeSelectors.selectCurrentEmployee);
  }

  onChange(employeeData: { employee?: Employee, employeeId?: number, type: 'DELETE' | 'UPDATE' }) {
    if (employeeData.type == 'UPDATE') {
      // this.store.dispatch(EmployeeActions.updateEmployee({ id: employeeData?.employee }));
    } else {
      // this.store.dispatch(EmployeeActions.deleteEmployee({ id: employeeData?.employeeId }));
    }
  }

}
