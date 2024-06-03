import { LoginPageComponent } from './pages/login-page/login-page.component'

import { NgModule } from '@angular/core'
import {RouterModule} from "@angular/router";
import {JobSearchPageComponent} from "../../job-search/pages/job-search-page/job-search-page.component";
import {AuthService} from "../../../services/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

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
        ]),
        ReactiveFormsModule,
        NgIf
    ],
  providers: [AuthService]
})
export class LoginModule {}
