import { NgModule } from '@angular/core'
import {RegisterPageComponent} from "./pages/register-page/register-page.component";
import {RouterModule} from "@angular/router";
import {JobSearchPageComponent} from "../../job-search/pages/job-search-page/job-search-page.component";
import {AuthService} from "../../../services/auth.service";

@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: RegisterPageComponent
      }
    ])
  ],
  providers: [AuthService]
})
export class RegisterModule {}
