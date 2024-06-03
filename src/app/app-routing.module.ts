import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {JwtAuthGuard} from "@shared/modules/auth/guards/jwt-auth.guard";
import {EmployerGuard} from "@shared/modules/auth/guards/employer.guard";

export const routes: Routes = [
  {
    path: 'jobs',
    loadChildren: () => import('./modules/job-search/job-search.module').then(m => m.JobSearchModule)
  },
  {
    path: 'auth/login',
    loadChildren: () => import('./modules/authorization/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'auth/register',
    loadChildren: () => import('./modules/authorization/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'jobs/create',
    loadChildren: () => import('./modules/create-vacancy/create-vacancy.module').then(m => m.CreateVacancyModule),
    canActivate: [EmployerGuard]
  },
  {
    path: 'jobs/:id',
    loadChildren: () => import('./modules/job-details/job-details.module').then(m => m.JobDetailsModule)
  },
  {
    path: 'jobs/:id/edit',
    loadChildren: () => import('./modules/edit-vacancy/edit-vacancy.module').then(m => m.EditVacancyModule),
    canActivate: [EmployerGuard],
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [JwtAuthGuard],
  },
  {
    path: '**',
    redirectTo: 'jobs'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
