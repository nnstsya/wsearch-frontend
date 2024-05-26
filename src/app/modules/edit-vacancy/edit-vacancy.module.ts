import { NgModule } from '@angular/core'
import {RouterModule} from "@angular/router";
import {EditVacancyPageComponent} from "./pages/edit-vacancy-page/edit-vacancy-page.component";
import {VacancyService} from "../../services/vacancy.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        EditVacancyPageComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: EditVacancyPageComponent
            }
        ]),
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [VacancyService]
})
export class EditVacancyModule {}
