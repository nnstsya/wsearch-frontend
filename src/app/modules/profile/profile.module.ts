import { NgModule } from '@angular/core'
import {RouterModule} from "@angular/router";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";

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
        ])
    ]
})
export class ProfileModule {}
