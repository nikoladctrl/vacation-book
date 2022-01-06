import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';


import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromDepartmentSelectors from '../../data/department.selectors';
import { Department } from '../../model/department.model';

@Component({
  selector: 'app-department-list-container',
  templateUrl: './department-list-container.component.html',
  styleUrls: ['./department-list-container.component.css']
})
export class DepartmentListContainerComponent implements OnInit {

  departments$ : Observable<Department[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.departments$ = this.store.select(fromDepartmentSelectors.selectAllDepartments);
  }

}
