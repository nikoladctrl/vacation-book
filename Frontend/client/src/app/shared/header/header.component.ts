import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/shared/models/link.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links: Link[] = [
    { name: 'Companies', url: 'companies' },
    { name: 'Departments', url: 'departments' },
    { name: 'Employees', url: 'employees' },
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

}
