import {Component, Input} from '@angular/core'

@Component({
  selector: 'app-vacancy-respond-button',
  templateUrl: './vacancy-respond-button.component.html',
  styleUrls: ['./vacancy-respond-button.component.scss']
})
export class VacancyRespondButtonComponent {
  @Input() isSmall = true
  isLoading = false

  showLoader (): void {
    this.isLoading = true
  }
}
