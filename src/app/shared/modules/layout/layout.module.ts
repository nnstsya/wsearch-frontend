import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header/header.component";
import { MatIcon } from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AuthModule} from "@shared/modules/auth/auth.module";

@NgModule({
    declarations: [HeaderComponent],
    imports: [
        MatIcon,
        RouterLink,
        CommonModule,
        AuthModule
    ],
    exports: [HeaderComponent]
})
export class LayoutModule {}
