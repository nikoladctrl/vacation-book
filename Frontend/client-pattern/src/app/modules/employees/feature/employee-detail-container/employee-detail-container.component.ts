import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-employee-detail-container',
  templateUrl: './employee-detail-container.component.html',
  styleUrls: ['./employee-detail-container.component.css']
})
export class EmployeeDetailContainerComponent implements OnInit {

  employee$: Observable<Employee>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

}
