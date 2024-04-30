import { VacancyModel } from '@shared/modules/models/vacancy.model'

import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-job-search-vacancy',
  templateUrl: './job-search-vacancy.component.html',
  styleUrls: ['./job-search-vacancy.component.scss']
})
export class JobSearchVacancyComponent {
  @Input() vacancy: VacancyModel = <VacancyModel>{}
}
