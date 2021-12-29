import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/shared/models/employee.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  login(loginUser: any) {
    const url = `${environment.baseUrl}/auth/login`;
    return this.http.post<Employee>(url, loginUser);
  }

  register(loginUser: any) {
    const url = `${environment.baseUrl}/auth/register`;
    return this.http.post<Employee>(url, loginUser);
  }
}
