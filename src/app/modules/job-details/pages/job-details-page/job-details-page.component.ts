import {Component, Input} from '@angular/core'
import {VacancyModel, VacancyTypeModel} from '@shared/modules/models/vacancy.model'
import {VacancyService} from "../../../../services/vacancy.service";
import {ActivatedRoute} from "@angular/router";
import {filter, map, Observable, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-job-details-page',
  templateUrl: './job-details-page.component.html',
  styleUrl: './job-details-page.component.scss'
})
export class JobDetailsPageComponent {
  vacancy$: Observable<VacancyModel> = this.route.paramMap.pipe(
      map(params => params.get('id')),
      filter((id) => !!id),
      switchMap((id) => this.vacancyService.getVacancyById(+id!)),
  );
  constructor(
      private vacancyService: VacancyService,
      private route: ActivatedRoute
  ) {}
}
