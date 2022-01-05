import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'companies' },
  { path: 'companies', loadChildren: () => import('./modules/companies/companies.module').then(m => m.CompaniesModule) },
  { path: 'departments', loadChildren: () => import('./modules/departments/departments.module').then(m => m.DepartmentsModule) },
  { path: 'employees', loadChildren: () => import('./modules/employees/employees.module').then(m => m.EmployeesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

