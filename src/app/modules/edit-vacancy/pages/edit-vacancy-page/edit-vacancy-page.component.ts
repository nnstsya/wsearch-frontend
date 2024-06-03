import {Component, OnInit} from '@angular/core';
import {filter, map, Observable, switchMap, take, tap} from "rxjs";
import {VacancyModel, VacancyTypeModel} from "@shared/modules/models/vacancy.model";
import {VacancyService} from "../../../../services/vacancy.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NonNullableFormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-vacancy-page',
  templateUrl: './edit-vacancy-page.component.html',
  styleUrls: ['./edit-vacancy-page.component.scss']
})
export class EditVacancyPageComponent implements OnInit {

  vacancyEditForm = this.formBuilder.group({
  name: this.formBuilder.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]),
  company: this.formBuilder.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
  salary: this.formBuilder.control('', [Validators.required, Validators.max(100000)]),
  type: this.formBuilder.control<VacancyTypeModel>(VacancyTypeModel.OFFICE, Validators.required),
  description: this.formBuilder.control('', [Validators.required, Validators.minLength(100), Validators.maxLength(4000)]),
});

  vacancyConstParams = {id: 0, date: 0}

  constructor(
      private vacancyService: VacancyService,
      private route: ActivatedRoute,
      private formBuilder: NonNullableFormBuilder,
      private router: Router
  ) {}

  ngOnInit() {
      this.route.paramMap.pipe(
          take(1),
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
      )
          .subscribe()
  }

  submitted = false;

  onSubmit() {
    if (this.vacancyEditForm.valid) {
      const updatedVacancy: VacancyModel = {
        ...this.vacancyEditForm.getRawValue(),
        type: this.vacancyEditForm.controls.type.value,
        id: this.vacancyConstParams.id,
        date: this.vacancyConstParams.date,
      };
      this.submitted = true;
      this.edit(this.vacancyConstParams.id, updatedVacancy);
    }
  }

  edit(id: number, updatedVacancy: VacancyModel) {
    this.vacancyService.updateVacancy(id, updatedVacancy).subscribe();
      this.router.navigate(['jobs']);
  }
}
