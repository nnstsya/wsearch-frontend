import { Component, OnInit } from '@angular/core';
import { VacancyModel } from '@shared/modules/models/vacancy.model';
import { VacancyService } from '@services/vacancy.service';
import {Observable, startWith, switchMap, tap, withLatestFrom} from 'rxjs';
import { map } from 'rxjs/operators';
import {NonNullableFormBuilder, Validators} from "@angular/forms";
import {AuthService} from "@services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-job-search-page',
  templateUrl: './job-search-page.component.html',
  styleUrls: ['./job-search-page.component.scss'],
})
export class JobSearchPageComponent  {
  searchForm = this.formBuilder.control('');
  filteredVacancyList$: Observable<VacancyModel[]> = this.searchForm.valueChanges
      .pipe(
          startWith(''),
          switchMap((name) => this.vacancyService.getAllVacancies().pipe(map((response) => ([name, response])))),
          map(([name, vacancyList]: any) => vacancyList.filter((vacancy: VacancyModel) =>
              vacancy.name.toLowerCase().includes(name.toLowerCase()))
          ),
          tap(vacancies => this.numOfVacancies = vacancies.length)
      )
  numOfVacancies: number = 0;

  constructor(private vacancyService: VacancyService, private formBuilder: NonNullableFormBuilder,) {}
}
