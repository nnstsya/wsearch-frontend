import { NgModule } from '@angular/core'
import {RouterModule} from "@angular/router";
import {EditVacancyPageComponent} from "./pages/edit-vacancy-page/edit-vacancy-page.component";
import {VacancyService} from "../../services/vacancy.service";

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
    ],
    providers: [VacancyService]
})
export class EditVacancyModule {}
