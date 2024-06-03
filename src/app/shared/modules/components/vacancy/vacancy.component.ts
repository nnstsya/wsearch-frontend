import {Component, Input} from '@angular/core';
import {VacancyModel, VacancyTypeModel} from "@shared/modules/models/vacancy.model";
import {AuthService} from "@services/auth.service";

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.scss']
})
export class VacancyComponent {
  @Input() vacancy: VacancyModel = <VacancyModel>{}

  readonly vacancyTypeLabels: Record<string, string> = {
    [VacancyTypeModel.OFFICE]: 'Офіс',
    [VacancyTypeModel.REMOTE]: 'Віддалена робота'
  }
  constructor(private authService: AuthService) {}
}
