import { Department } from '../../../shared/models/department.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from 'src/app/shared/models/company.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


  getDepartments() {
    const url = `${environment.baseUrl}/departments`;
    return this.http.get<Department[]>(url);
  }

  getDepartment(id: number) {
    const url = `${environment.baseUrl}/departments/${id}`;
    return this.http.get<Department>(url);
  }

  createDepartment(department: { name: string, companyId: number }) {
    const url = `${environment.baseUrl}/departments`;
    return this.http.post<Department>(url, department);
  }

  updateDepartment(id: number, department: Department) {
    const url = `${environment.baseUrl}/departments/${id}`;
    return this.http.put<Department>(url, department);
  }

  deleteDepartment(id: number) {
    const url = `${environment.baseUrl}/departments/${id}`;
    return this.http.delete<void>(url);
  } 
}
