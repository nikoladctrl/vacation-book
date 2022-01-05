import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Business } from '../../model/business.model';
import { Company } from '../../model/company.model';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }


  getCompanies() {
    const url = `${environment.baseUrl}/companies`;
    return this.http.get<Company[]>(url);
  }

  getCompany(id: number) {
    const url = `${environment.baseUrl}/companies${id}`;
    return this.http.get<Company>(url);
  }

  createCompany(company: Company) {
    const url = `${environment.baseUrl}/companies`;
    return this.http.post<Company>(url, company);
  }

  updateCompany(id: number, company: Company) {
    const url = `${environment.baseUrl}/companies${id}`;
    return this.http.put<Company>(url, company);
  }

  deleteCompany(id: number) {
    const url = `${environment.baseUrl}/companies${id}`;
    return this.http.delete<void>(url);
  }

  getBusinesses() {
    const url = `${environment.baseUrl}/businesses`;
    return this.http.get<Business[]>(url);
  }
}
