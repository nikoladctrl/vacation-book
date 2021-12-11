
import { environment } from './../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from 'src/app/models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getCompanies() {
    const url = `${environment.baseUrl}/companies`;
    return this.http.get<Company[]>(url);
  }

  getCompany(id: number) {
    const url = `${environment.baseUrl}/companies/${id}`;
    return this.http.get<Company>(url);
  }

  createCompany(company) {
    const url = `${environment.baseUrl}/companies`;
    return this.http.post<Company>(url, company);
  }

  updateCompany(id, company) {
    const url = `${environment.baseUrl}/companies/${id}`;
    return this.http.post<Company>(url, company);
  }
}
