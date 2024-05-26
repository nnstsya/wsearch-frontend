import { NgModule } from '@angular/core'
import {RouterModule} from "@angular/router";
import {CreateVacancyPageComponent} from "./pages/create-vacancy-page/create-vacancy-page.component";
import {VacancyService} from "../../services/vacancy.service";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        CreateVacancyPageComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: CreateVacancyPageComponent
            }
        ]),
        ReactiveFormsModule,
    ],
    providers: [VacancyService]
})
export class CreateVacancyModule {}
