import { VacancyModel } from '@shared/modules/models/vacancy.model'

import { Component } from '@angular/core'

@Component({
  selector: 'app-job-search-page',
  templateUrl: './job-search-page.component.html',
  styleUrl: './job-search-page.component.scss'
})
export class JobSearchPageComponent {
  vacancyList: VacancyModel[] = [
    {
      id: '1',
      name: 'Frontend розробник',
      company: 'Amedia',
      type: 'Віддалена робота',
      salary: '500-600',
      description: 'lalalalalala',
      date: '14 березня'
    },
    {
      id: '2',
      name: 'Frontend розробник',
      company: 'Amedia',
      type: 'Віддалена робота',
      salary: '500-600',
      description: 'lalalalalala',
      date: '14 березня'
    },
    {
      id: '3',
      name: 'Backend розробник',
      company: 'Amedia',
      type: 'Віддалена робота',
      salary: '500-600',
      description: 'lalalalalala',
      date: '14 березня'
    },
    {
      id: '4',
      name: 'Frontend розробник',
      company: 'Amedia',
      type: 'Віддалена робота',
      salary: '500-600',
      description: 'lalalalalala',
      date: '14 березня'
    }
  ]
  filteredVacancyList: VacancyModel[] = []
  numOfVacancies: number = this.vacancyList.length

  constructor() {
    this.filteredVacancyList = this.vacancyList;
  }

  filterResults(text: string) {
    text ? this.filteredVacancyList = this.vacancyList.filter(vacancy =>
    vacancy.name.toLowerCase().includes(text.toLowerCase())) : this.filteredVacancyList = this.vacancyList;
    this.numOfVacancies = this.filteredVacancyList.length;
  }
}
