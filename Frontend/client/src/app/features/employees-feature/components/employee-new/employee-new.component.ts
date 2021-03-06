import { Company } from '../../../../shared/models/company.model';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store';
import { Observable } from 'rxjs';
import * as EmployeeActions from '../../state/employee.actions';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  createEmployeeForm: FormGroup;
  companies$: Observable<Company[]>;

  constructor(private store: Store<AppState>) { }
 
  ngOnInit(): void {
    this.createEmployeeForm = this.initializeForm();
  }

  private initializeForm() {
    return new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required, this.validateDate.bind(this)]),
      yearsOfService: new FormControl('', [Validators.required, this.validateService.bind(this)]),
      companyId: new FormControl('', [Validators.required])
    });
  }

  private validateService(control: FormControl) {
    if (control.value < 0 || control.value > 40) {
      return { invalidNumber: { invalid : true } };
    }
    return null;
  }

  private validateDate(control: FormControl) {
    // let date: Date = control.value;
    // let todayDate: Date = new Date();
    // console.log(date, todayDate);
    // console.log(date.getFullYear, todayDate.getFullYear);


    // console.log(parseInt(todayDate.getFullYear.toString()));
    // console.log(parseInt(date.getFullYear.toString()));

    // // if (date.getFullYear >= todayDate.getFullYear || ((parseInt(todayDate.getFullYear.toString()) - 18 < parseInt(date.getFullYear.toString())))) {
    // //   return { invalid: true };
    // // }
  }

  onSubmit() {
    this.store.dispatch(EmployeeActions.createEmployee({ employee: this.createEmployeeForm.value }));
  }

}
