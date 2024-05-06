import { Component } from '@angular/core';
import { VacancyService } from '../../../../services/vacancy.service';
import {FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators} from '@angular/forms';
import { VacancyModel } from '@shared/modules/models/vacancy.model';

@Component({
  selector: 'app-create-vacancy-page',
  templateUrl: './create-vacancy-page.component.html',
  styleUrls: ['./create-vacancy-page.component.scss']
})
export class CreateVacancyPageComponent {
  vacancy: VacancyModel = {} as VacancyModel;
  submitted = false;

  vacancyCreateForm = this.formBuilder.group({
    name: this.formBuilder.control('', Validators.minLength(5)),
    company: this.formBuilder.control(''),
    type: this.formBuilder.control(''),
    salary: this.formBuilder.control(''),
    description: this.formBuilder.control('', [Validators.minLength(100), Validators.maxLength(2000)]),
  });

  constructor(private vacancyService: VacancyService, private formBuilder: NonNullableFormBuilder) {}

  createVacancy() {
    if (this.vacancyCreateForm.valid) {
      this.vacancy = {...this.vacancyCreateForm.getRawValue(), date: Date.now()};
      this.submitted = true;
      this.create();
    }
  }

  create() {
    this.vacancyService.createVacancy(this.vacancy);
  }
}
