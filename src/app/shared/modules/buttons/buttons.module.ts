import {
  VacancyRespondButtonComponent
} from '@shared/modules/buttons/vacancy-respond-button/vacancy-respond-button.component';
import { NgModule } from '@angular/core'
import { MatIcon } from '@angular/material/icon'
import {CommonModule} from "@angular/common"

@NgModule({
  declarations: [VacancyRespondButtonComponent],
  imports: [
    MatIcon,
    CommonModule
  ],
  exports: [VacancyRespondButtonComponent]
})
export class ButtonsModule {}
