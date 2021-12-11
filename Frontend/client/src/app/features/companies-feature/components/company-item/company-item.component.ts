import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent implements OnInit {

  @Input() company: Company;

  constructor() { }

  ngOnInit(): void {
  }

}
