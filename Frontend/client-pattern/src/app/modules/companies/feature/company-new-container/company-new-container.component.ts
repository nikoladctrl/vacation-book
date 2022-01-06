import { Company } from './../../../../../../../client/src/app/shared/models/company.model';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-company-new-container',
  templateUrl: './company-new-container.component.html',
  styleUrls: ['./company-new-container.component.css']
})
export class CompanyNewContainerComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onCreate(company: Company) {
    // this.store.dispatch(CompanyActions.addCompany({ company: company }));
  }

}
