import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store';
import * as fromEmployeeSelectors from '../../state/employee.selectors';
import { Employee } from 'src/app/shared/models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees$: Observable<Employee[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.employees$ = this.store.select(fromEmployeeSelectors.selectEmployees);
  }

}
