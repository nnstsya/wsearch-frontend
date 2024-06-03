import { Component } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, Validators } from '@angular/forms';
import { VacancyService } from '../../../../services/vacancy.service';
import {VacancyModel, VacancyTypeModel} from '@shared/modules/models/vacancy.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-vacancy-page',
  templateUrl: './create-vacancy-page.component.html',
  styleUrls: ['./create-vacancy-page.component.scss']
})
export class CreateVacancyPageComponent {
  vacancy: VacancyModel = {} as VacancyModel;
  submitted = false;

  vacancyCreateForm = this.formBuilder.group({
    name: this.formBuilder.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]),
    company: this.formBuilder.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    salary: this.formBuilder.control('', [Validators.required, Validators.max(100000)]),
    type: this.formBuilder.control<VacancyTypeModel>(VacancyTypeModel.OFFICE, Validators.required),
    description: this.formBuilder.control('', [Validators.required, Validators.minLength(100), Validators.maxLength(4000)]),
  });

  constructor(private vacancyService: VacancyService,
              private formBuilder: NonNullableFormBuilder,
              private router: Router
  ) {}

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
    this.router.navigate(['jobs']).then(location.reload);
  }
}
