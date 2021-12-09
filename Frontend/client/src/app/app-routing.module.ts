import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'companies', loadChildren: () => import('./features/companies-feature/companies.module').then(m => m.CompaniesModule) },
  { path: 'departments', loadChildren: () => import('./features/departments-feature/departments.module').then(m => m.DepartmentsModule) },
  { path: 'employees', loadChildren: () => import('./features/employees-feature/employees.module').then(m => m.EmployeesModule) },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
