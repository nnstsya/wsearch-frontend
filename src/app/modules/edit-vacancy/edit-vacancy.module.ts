import { NgModule } from '@angular/core'
import {RouterModule} from "@angular/router";
import {EditVacancyPageComponent} from "./pages/edit-vacancy-page/edit-vacancy-page.component";

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
    ]
})
export class EditVacancyModule {}
