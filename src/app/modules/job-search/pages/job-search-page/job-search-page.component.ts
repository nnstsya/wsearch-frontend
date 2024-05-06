import { Component, OnInit } from '@angular/core';
import { VacancyModel } from '@shared/modules/models/vacancy.model';
import { VacancyService } from '../../../../services/vacancy.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-job-search-page',
  templateUrl: './job-search-page.component.html',
  styleUrls: ['./job-search-page.component.scss']
})
export class JobSearchPageComponent implements OnInit {
  vacancyList: Observable<VacancyModel[]>;
  filteredVacancyList$: Observable<VacancyModel[]>;
  numOfVacancies: number = 0;

  constructor(private vacancyService: VacancyService) {
    this.vacancyList = this.vacancyService.getAllVacancies();
    this.filteredVacancyList$ = this.vacancyList;
  }

  ngOnInit() {
    this.getNumOfVacancies();
  }

  filterResults(text: string) {
    this.filteredVacancyList$ = text ? this.vacancyList.pipe(
        map(vacancies => vacancies.filter(vacancy =>
            vacancy.name.toLowerCase().includes(text.toLowerCase()))
        )
    ) : this.vacancyList;
    this.getNumOfVacancies();
  }

  private getNumOfVacancies() {
    this.filteredVacancyList$.pipe(
        map(vacancies => vacancies.length)
    ).subscribe(num => this.numOfVacancies = num);
  }
}
