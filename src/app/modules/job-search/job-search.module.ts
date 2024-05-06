import { EffectsModule } from '@shared/modules/effects/effects.module'
import { LayoutModule } from '@shared/modules/layout/layout.module'

import { JobSearchVacancyComponent } from './pages/job-search-page/components/job-search-vacancy/job-search-vacancy.component'
import { JobSearchPageComponent } from './pages/job-search-page/job-search-page.component'

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { RouterModule } from '@angular/router'
import {ButtonsModule} from "@shared/modules/buttons/buttons.module";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {VacancyService} from "../../services/vacancy.service";

@NgModule({
  declarations: [
    JobSearchPageComponent,
    JobSearchVacancyComponent
  ],
    imports: [
        EffectsModule,
        MatIconModule,
        CommonModule,
        LayoutModule,
        RouterModule.forChild([
            {
                path: '',
                component: JobSearchPageComponent
            }
        ]),
        ButtonsModule,
        MatButtonModule,
        MatMenuModule,
    ],
    providers: [VacancyService]
})
export class JobSearchModule {}
