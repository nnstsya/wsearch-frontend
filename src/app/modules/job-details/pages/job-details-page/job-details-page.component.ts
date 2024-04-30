import {Component, Input} from '@angular/core'
import {VacancyModel} from '@shared/modules/models/vacancy.model'

@Component({
  selector: 'app-job-details-page',
  templateUrl: './job-details-page.component.html',
  styleUrl: './job-details-page.component.scss'
})
export class JobDetailsPageComponent {
  @Input() vacancy: VacancyModel = {
    id: '3',
    name: 'Frontend розробник',
    company: 'Amedia',
    type: 'Віддалена робота',
    salary: '500-600',
    description: 'lalalala lalalal alalalal alal lflflflfll flflflffl flfl lfl fl fl fl fl fl lflfalal lalala lala lalalal alalalal lalalala lalalal alalalal alal lflflflfll flflflffl flfl lfl fl fl fl fl fl lflfalal lalala lala lalalal alalalal alala lalalala lalalal alalalal alal lflflflfll flflflffl flfl lfl fl fl fl fl fl lflfalal lalala lala lalalal alalalal alala lalalala lalalal alalalal alal lflflflfll flflflffl flfl lfl fl fl fl fl fl lflfalal lalala lala lalalal alalalal alalalalalala lalalal alalalal alal lflflflfll flflflffl flfl lfl fl fl fl fl fl lflfalal lalala lala lalalal alalalal alala  alala',
    date: '14 березня'
  }
}
