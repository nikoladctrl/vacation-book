import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store';
import { Employee } from 'src/app/shared/models/employee.model';
import * as fromEmployeeSelectors from '../../state/employee.selectors';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee$: Observable<Employee>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.employee$ = this.store.select(fromEmployeeSelectors.selectCurrentEmployee);
  }

}
