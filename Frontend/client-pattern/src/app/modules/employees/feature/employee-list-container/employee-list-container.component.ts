import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Employee } from '../../model/employee.model';
import * as fromEmployeeSelectors from '../../data/employee.selectors';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.component.html',
  styleUrls: ['./employee-list-container.component.css']
})
export class EmployeeListContainerComponent implements OnInit {

  employees$: Observable<Employee[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.employees$ = this.store.select(fromEmployeeSelectors.getEmployees);
  }

}
