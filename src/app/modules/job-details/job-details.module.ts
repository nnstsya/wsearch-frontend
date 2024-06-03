import { JobDetailsPageComponent } from './pages/job-details-page/job-details-page.component'

import { NgModule } from '@angular/core'
import {RouterModule} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {EffectsModule} from "@shared/modules/effects/effects.module";
import {ButtonsModule} from "@shared/modules/buttons/buttons.module";
import {VacancyService} from "../../services/vacancy.service";
import {AsyncPipe, CommonModule} from "@angular/common";
import {AuthService} from "../../services/auth.service";
import {AuthModule} from "@shared/modules/auth/auth.module";

@NgModule({
  declarations: [
    JobDetailsPageComponent
  ],
  imports: [
    CommonModule,
    EffectsModule,
    RouterModule.forChild([
      {
        path: '',
        component: JobDetailsPageComponent
      }
    ]),
    MatIcon,
    ButtonsModule,
    AsyncPipe,
    AuthModule
  ],
  providers: [VacancyService, AuthService]
})
export class JobDetailsModule {}
