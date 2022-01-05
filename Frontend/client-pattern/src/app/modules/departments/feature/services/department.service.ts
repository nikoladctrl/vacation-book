import { env } from 'process';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Department } from '../../model/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getDepartments() {
    const url = `${environment.baseUrl}/departments`;
    return this.http.get<Department[]>(url);
  }

  getDepartment(id: number) {
    const url = `${environment.baseUrl}/departments/${id}`;
    return this.http.get<Department>(url);
  }

  createDepartment(department: Department) {
    const url = `${environment.baseUrl}/departments`;
    return this.http.post<Department>(url, department);
  }

  updateDepartment(id: number, department: Department) {
    const url = `${environment.baseUrl}/departments${id}`;
    return this.http.put<Department>(url, department);
  }

  deleteDepartment(id: number) {
    const url = `${environment.baseUrl}/departments${id}`;
    return this.http.delete<void>(url);
  }
}
