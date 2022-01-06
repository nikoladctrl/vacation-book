import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/modules/companies/model/company.model';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as DepartmentActions from '../../data/department.actions';
import { Department } from '../../model/department.model';

@Component({
  selector: 'app-department-new-container',
  templateUrl: './department-new-container.component.html',
  styleUrls: ['./department-new-container.component.css']
})
export class DepartmentNewContainerComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onCreate(department: Department) {
    this.store.dispatch(DepartmentActions.addDepartment({ department }));
  }

}
