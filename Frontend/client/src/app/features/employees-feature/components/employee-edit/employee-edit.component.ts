import { Observable, Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import * as fromEmployeeSelectors from '../../state/employee.selectors';
import { DatePipe } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  editEmployeeForm: FormGroup;
  employee: Employee;
  experiences: { id: number, name: string, short: string } [] = [
    { id: 0, name: 'Less than a year', short: 'LESS_THAN_ONE'},
    { id: 1, name: 'Between 1 and 3 years', short: 'BETWEEN_ONE_AND_THREE'},
    { id: 2, name: 'Between 3 and 5 years', short: 'BETWEEN_THREE_AND_FIVE'},
    { id: 3, name: 'More than 5 years', short: 'MORE_THAN_FIVE'},
  ];

  constructor(private store: Store<AppState>, private datePipe: DatePipe) { }
  
  ngOnInit(): void {
    this.store.select(fromEmployeeSelectors.selectCurrentEmployee).pipe(map(employee => this.employee = employee));
    this.editEmployeeForm = this.initializeForm();
    this.listenToForm();
  }
  
  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private initializeForm() {
    return new FormGroup({
      firstName: new FormControl(this.employee.firstName, [Validators.required]),
      lastName: new FormControl(this.employee.lastName, [Validators.required]),
      birthDate: new FormControl(this.datePipe.transform(this.employee.birthDate, 'yyyy-MM-dd'), [Validators.required]),
      yearsOfService: new FormControl([Validators.required, this.validateService.bind(this)]),
      image: new FormControl(this.employee?.image, [Validators.pattern(/\.(jpe?g|png|gif|bmp)$/i)]),
      holidaysStartOn: new FormControl(),
      holidaysEndOn: new FormControl(),
    });
  }

  private validateService(control: FormControl) {
    if (control.value < 0 || control.value > 40) {
      return { invalid: true };
    }
    return null;
  }

  private validateHolidays(control: FormControl) {
    console.log('Validate date');
  }

  private listenToForm() {
    
    this.subscriptions.push(this.editEmployeeForm.valueChanges.subscribe((form: FormGroup) => {
      
      let startDate = this.editEmployeeForm.get('holidaysStartOn');
      let endDate = this.editEmployeeForm.get('holidaysEndOn');

      if (startDate && !endDate) {
        console.log('Change startDate detected!')
        endDate.setValidators([Validators.required, this.validateHolidays.bind(this)]);
        startDate.markAsTouched();
        endDate.setErrors([{ required : true }]);
        this.editEmployeeForm.updateValueAndValidity();
      }
      if (!startDate && endDate) {
        console.log('Change endDate detected!')
        startDate.setValidators([Validators.required, this.validateHolidays.bind(this)]);
        endDate.markAsTouched();
        startDate.setErrors([{ required : true }]);
        this.editEmployeeForm.updateValueAndValidity();
      }

      if (startDate && endDate) {
        console.log('Change both detected!')
        startDate.clearValidators();
        endDate.clearValidators();
        this.editEmployeeForm.updateValueAndValidity();
      }

    }));
  };

  onSubmit() {
    console.log(this.editEmployeeForm.value);
  }

}
