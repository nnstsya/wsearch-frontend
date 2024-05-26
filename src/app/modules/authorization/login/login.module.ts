import { LoginPageComponent } from './pages/login-page/login-page.component'

import { NgModule } from '@angular/core'
import {RouterModule} from "@angular/router";
import {JobSearchPageComponent} from "../../job-search/pages/job-search-page/job-search-page.component";
import {AuthService} from "../../../services/auth.service";

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
  ],
  providers: [AuthService]
})
export class LoginModule {}
