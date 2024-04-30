import { LoginPageComponent } from './pages/login-page/login-page.component'

import { NgModule } from '@angular/core'
import {RouterModule} from "@angular/router";
import {JobSearchPageComponent} from "../../job-search/pages/job-search-page/job-search-page.component";

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LoginPageComponent
      }
    ])
  ]
})
export class LoginModule {}
