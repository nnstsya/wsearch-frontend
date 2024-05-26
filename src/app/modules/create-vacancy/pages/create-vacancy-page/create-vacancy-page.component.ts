import { Component } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, Validators } from '@angular/forms';
import { VacancyService } from '../../../../services/vacancy.service';
import {VacancyModel, VacancyTypeModel} from '@shared/modules/models/vacancy.model';

@Component({
  selector: 'app-create-vacancy-page',
  templateUrl: './create-vacancy-page.component.html',
  styleUrls: ['./create-vacancy-page.component.scss']
})
export class CreateVacancyPageComponent {
  vacancy: VacancyModel = {} as VacancyModel;
  submitted = false;

  vacancyCreateForm = this.formBuilder.group({
    name: this.formBuilder.control('', Validators.required),
    company: this.formBuilder.control('', Validators.required),
    salary: this.formBuilder.control('', Validators.required),
    type: this.formBuilder.control<VacancyTypeModel>(VacancyTypeModel.OFFICE, Validators.required),
    description: this.formBuilder.control('', Validators.required),
  });

  constructor(private vacancyService: VacancyService, private formBuilder: NonNullableFormBuilder) {}

  onSubmit() {
    if (this.vacancyCreateForm.valid) {
      this.vacancy = {
        ...this.vacancyCreateForm.getRawValue(),
        type: this.vacancyCreateForm.controls.type.value,
        date: Date.now()
      };
      this.submitted = true;
      this.create();
    }
  }

  create() {
    this.vacancyService.createVacancy(this.vacancy).subscribe();
  }
}
