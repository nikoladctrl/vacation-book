import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Department } from '../../model/department.model';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromDepartmentSelectors from '../../data/department.selectors';

@Component({
  selector: 'app-department-detail-container',
  templateUrl: './department-detail-container.component.html',
  styleUrls: ['./department-detail-container.component.css']
})
export class DepartmentDetailContainerComponent implements OnInit {

  department$: Observable<Department>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.department$ = this.store.select(fromDepartmentSelectors.selectCurrentDepartment);
  }

}
