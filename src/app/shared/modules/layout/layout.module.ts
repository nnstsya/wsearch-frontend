import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header/header.component";
import { MatIcon } from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@NgModule({
    declarations: [HeaderComponent],
    imports: [
        MatIcon,
        RouterLink
    ],
    exports: [HeaderComponent]
})
export class LayoutModule {}
