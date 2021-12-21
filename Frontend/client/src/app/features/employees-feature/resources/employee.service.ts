import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { Employee } from 'src/app/models/employee.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


  getEmployees() {
    const url = `${environment.baseUrl}/employees`;
    return this.http.get<Employee[]>(url);
  }

  getEmployee(id: number) {
    const url = `${environment.baseUrl}/employees/${id}`;
    return this.http.get<Employee>(url);
  }

  createEmployee(employee: Employee) {
    const url = `${environment.baseUrl}/employees`;
    return this.http.post<Employee>(url, employee);
  }

  updateEmployee(id: number, employee: Employee) {
    const url = `${environment.baseUrl}/employees/${id}`;
    return this.http.put<Employee>(url, employee);
  }

  deleteEmployee(id: number) {
    const url = `${environment.baseUrl}/employees/${id}`;
    return this.http.delete<void>(url);
  }



  
}
