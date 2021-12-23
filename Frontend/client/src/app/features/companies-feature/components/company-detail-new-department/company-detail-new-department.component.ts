import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store';

import * as fromCompanySelectors from '../../state/company.selectors';
import * as DepartmentActions from '../../../departments-feature/state/department.actions';
import { map } from 'rxjs/operators';
import { Department } from 'src/app/models/department.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-company-detail-new-department',
  templateUrl: './company-detail-new-department.component.html',
  styleUrls: ['./company-detail-new-department.component.css']
})
export class CompanyDetailNewDepartmentComponent implements OnInit {
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onSubmit(createDepartmentForm: NgForm) {
    this.store.dispatch(DepartmentActions.createDepartment({ department: createDepartmentForm.value }))
  }

}
