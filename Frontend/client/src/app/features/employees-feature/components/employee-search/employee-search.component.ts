import { debounceTime, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {

  searchEmployeeForm: FormGroup;
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.searchEmployeeForm = this.initializeForm();
  }

  private initializeForm() {
    return new FormGroup({
      search: new FormControl('')
    });
  }

  private listenToForm() {
    this.searchEmployeeForm
      .valueChanges.pipe(
        debounceTime(500),
      ).subscribe(formValues => this.filter.emit(formValues));
  }

}
