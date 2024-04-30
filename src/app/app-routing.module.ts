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
    path: 'jobs/:id',
    loadChildren: () => import('./modules/job-details/job-details.module').then(m => m.JobDetailsModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
