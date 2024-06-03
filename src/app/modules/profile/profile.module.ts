import { NgModule } from '@angular/core'
import {RouterModule} from "@angular/router";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {AuthModule} from "@shared/modules/auth/auth.module";
import {ComponentsModule} from "@shared/modules/components/components.module";

@NgModule({
    declarations: [
        ProfilePageComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ProfilePageComponent
            }
        ]),
        ReactiveFormsModule,
        ComponentsModule,
        AsyncPipe,
        AuthModule,
        NgIf,
        NgForOf
    ]
})
export class ProfileModule {}
