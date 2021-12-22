import { FilterCompany } from './../../../../models/filter-company.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.css']
})
export class CompanySearchComponent implements OnInit {

  searchForm: FormGroup;

  @Output() filterValues: EventEmitter<FilterCompany> = new EventEmitter<FilterCompany>();

  constructor() { }

  ngOnInit(): void {
    this.searchForm = this.initializeForm();
    this.listenFormChanges();
  }

  private initializeForm() {
    return new FormGroup({
      name: new FormControl(''),
      address: new FormControl(''),
      country: new FormControl(''),
      business: new FormControl(''),
    });
  }

  private listenFormChanges() {
    this.searchForm.valueChanges
      .pipe(
        debounceTime(500)
      ).subscribe(formValues => this.filterValues.emit(formValues));
  }

}
