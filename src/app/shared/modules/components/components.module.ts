import { NgModule } from "@angular/core";

import {CommonModule} from "@angular/common";
import {VacancyComponent} from "@shared/modules/components/vacancy/vacancy.component";
import {RouterLink} from "@angular/router";

@NgModule({
    declarations: [VacancyComponent],
    imports: [CommonModule, RouterLink],
    exports: [VacancyComponent]
})
export class ComponentsModule {}
