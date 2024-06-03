import {Component} from '@angular/core'
import {VacancyModel, VacancyTypeModel} from '@shared/modules/models/vacancy.model'
import {VacancyService} from "@services/vacancy.service";
import {ActivatedRoute, Router} from "@angular/router";
import {filter, map, Observable, switchMap, tap} from "rxjs";
import {AuthService} from "@services/auth.service";
import {DecodedUserModel, UserRoleModel} from "@shared/modules/models/user.model";

@Component({
  selector: 'app-job-details-page',
  templateUrl: './job-details-page.component.html',
  styleUrl: './job-details-page.component.scss'
})
export class JobDetailsPageComponent{
  vacancy$: Observable<VacancyModel> = this.route.paramMap.pipe(
      map(params => params.get('id')),
      filter((id) => !!id),
      switchMap((id) => this.vacancyService.getVacancyById(+id!)),
      tap(value => {
        this.vacancyId = +value.id!
      })
  );

    readonly vacancyTypeLabels: Record<string, string> = {
        [VacancyTypeModel.OFFICE]: 'Офіс',
        [VacancyTypeModel.REMOTE]: 'Віддалена робота'
    }

  vacancyId = 0;
  user$: Observable<DecodedUserModel | null> = this.authService.currentUser$;
  userApplied = false;

  constructor(
      private vacancyService: VacancyService,
      private authService: AuthService,
      private route: ActivatedRoute,
      private router: Router
  ) {}

  protected readonly UserRoleModel = UserRoleModel;

  deleteVacancy() {
    this.vacancyService.deleteVacancy(this.vacancyId).pipe(
        tap(() => {
          this.router.navigate(['jobs']).then(() => {
            location.reload();
          });
        })).subscribe();
  }

  onApply() {
      this.userApplied = true;
  }
}
