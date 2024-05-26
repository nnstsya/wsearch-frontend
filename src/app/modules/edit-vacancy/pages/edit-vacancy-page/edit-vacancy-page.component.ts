import { Component } from '@angular/core';
import {filter, map, Observable, switchMap, tap} from "rxjs";
import {VacancyModel} from "@shared/modules/models/vacancy.model";
import {VacancyService} from "../../../../services/vacancy.service";
import {ActivatedRoute} from "@angular/router";
import {NonNullableFormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-vacancy-page',
  templateUrl: './edit-vacancy-page.component.html',
  styleUrls: ['./edit-vacancy-page.component.scss']
})
export class EditVacancyPageComponent {

  vacancyEditForm = this.formBuilder.group({
  name: this.formBuilder.control('', Validators.minLength(5)),
  company: this.formBuilder.control(''),
  salary: this.formBuilder.control(''),
  type: this.formBuilder.control('', Validators.required),
  description: this.formBuilder.control('', [Validators.minLength(100), Validators.maxLength(2000)]),
});

  vacancyConstParams = {id: 0, date: 0}

  vacancy$: Observable<VacancyModel> = this.route.paramMap.pipe(
      map(params => params.get('id')),
      filter((id) => !!id),
      switchMap((id) => this.vacancyService.getVacancyById(+id!)),
      tap(value => {
        this.vacancyConstParams.id = +value.id!
        this.vacancyConstParams.date = value.date!
        this.vacancyEditForm.controls.name.setValue(value.name, {emitEvent: false})
        this.vacancyEditForm.controls.company.setValue(value.company, {emitEvent: false})
        this.vacancyEditForm.controls.type.setValue(value.type, {emitEvent: false})
        this.vacancyEditForm.controls.salary.setValue(value.salary, {emitEvent: false})
        this.vacancyEditForm.controls.description.setValue(value.description, {emitEvent: false})
      })
  );

  constructor(
      private vacancyService: VacancyService,
      private route: ActivatedRoute,
      private formBuilder: NonNullableFormBuilder,
  ) {}

  submitted = false;

  onSubmit() {
    if (this.vacancyEditForm.valid) {
      const updatedVacancy: VacancyModel = {
        ...this.vacancyEditForm.getRawValue(),
        id: this.vacancyConstParams.id,
        date: this.vacancyConstParams.date,
      };
      this.submitted = true;
      this.edit(this.vacancyConstParams.id, updatedVacancy);
    }
  }

  edit(id: number, updatedVacancy: VacancyModel) {
    this.vacancyService.updateVacancy(id, updatedVacancy).subscribe();
  }
}
