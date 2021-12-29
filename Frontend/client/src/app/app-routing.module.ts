import { AuthModule } from './features/auth/auth.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './features/auth/resources/guards/auth.guard';
import { AdminGuard } from './features/auth/resources/guards/admin.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule), canActivate: [AuthGuard] },
  { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] },
  { path: 'companies', loadChildren: () => import('./features/companies-feature/companies.module').then(m => m.CompaniesModule), canActivate: [AdminGuard] },
  { path: 'departments', loadChildren: () => import('./features/departments-feature/departments.module').then(m => m.DepartmentsModule), canActivate: [AdminGuard] },
  { path: 'employees', loadChildren: () => import('./features/employees-feature/employees.module').then(m => m.EmployeesModule), canActivate: [AdminGuard] },
  // { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) }
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
