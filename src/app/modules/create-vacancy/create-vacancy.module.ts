import { NgModule } from '@angular/core'
import {RouterModule} from "@angular/router";
import {CreateVacancyPageComponent} from "./pages/create-vacancy-page/create-vacancy-page.component";

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
    ]
})
export class CreateVacancyModule {}
