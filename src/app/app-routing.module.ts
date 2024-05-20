import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'jobs',
    loadChildren: () => import('./modules/job-search/job-search.module').then(m => m.JobSearchModule)
  },
  {
    path: '',
    redirectTo: 'jobs',
    pathMatch: "full"
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/authorization/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./modules/authorization/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'jobs/create',
    loadChildren: () => import('./modules/create-vacancy/create-vacancy.module').then(m => m.CreateVacancyModule)
  },
  {
    path: 'jobs/:id',
    loadChildren: () => import('./modules/job-details/job-details.module').then(m => m.JobDetailsModule)
  },
  {
    path: 'jobs/:id/edit',
    loadChildren: () => import('./modules/edit-vacancy/edit-vacancy.module').then(m => m.EditVacancyModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
