import { NgModule } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { LayoutModule } from "@shared/modules/layout/layout.module";

import { AppComponent } from "./app.component";
import { AutorizationPageComponent } from "./pages/autorization-page/autorization-page.component";
import { JobDetailsPageComponent } from "./pages/job-details-page/job-details-page.component";
import { JobSearchPageComponent } from "./pages/job-search-page/job-search-page.component";

@NgModule({
  declarations: [
    AppComponent,
    AutorizationPageComponent,
    JobDetailsPageComponent,
    JobSearchPageComponent,
  ],
  imports: [LayoutModule, RouterOutlet],
  bootstrap: [AppComponent],
})
export class AppModule {}
