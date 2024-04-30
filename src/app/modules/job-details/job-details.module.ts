import { JobDetailsPageComponent } from './pages/job-details-page/job-details-page.component'

import { NgModule } from '@angular/core'
import {RouterModule} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {EffectsModule} from "@shared/modules/effects/effects.module";
import {ButtonsModule} from "@shared/modules/buttons/buttons.module";

@NgModule({
  declarations: [
    JobDetailsPageComponent
  ],
  imports: [
    EffectsModule,
    RouterModule.forChild([
      {
        path: '',
        component: JobDetailsPageComponent
      }
    ]),
    MatIcon,
    ButtonsModule
  ]
})
export class JobDetailsModule {}
