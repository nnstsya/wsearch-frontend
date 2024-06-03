import {AppComponent} from "./app.component";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";
import {LayoutModule} from "@shared/modules/layout/layout.module";
import {MatIcon} from "@angular/material/icon";
import {RouterOutlet} from "@angular/router";
import {ChangeDetectorRef, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {JwtAuthGuard} from "@shared/modules/auth/guards/jwt-auth.guard";
import {EmployerGuard} from "@shared/modules/auth/guards/employer.guard";
import { VacancyComponent } from './shared/modules/components/vacancy/vacancy.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatIcon,
    RouterOutlet,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [JwtAuthGuard, EmployerGuard],
  bootstrap: [AppComponent]
})
export class AppModule{}
