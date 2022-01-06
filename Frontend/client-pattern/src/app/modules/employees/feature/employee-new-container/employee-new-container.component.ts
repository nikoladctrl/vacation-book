import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Employee } from '../../model/employee.model';

import * as EmployeeActions from '../../data/employee.actions';

@Component({
  selector: 'app-employee-new-container',
  templateUrl: './employee-new-container.component.html',
  styleUrls: ['./employee-new-container.component.css']
})
export class EmployeeNewContainerComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onCreate(employee: Employee) {
    // this.store.dispatch(EmployeeActions.addEmployee({ employee: employee }))
  }

}
