import {AppComponent} from "./app.component";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";
import {LayoutModule} from "@shared/modules/layout/layout.module";
import {MatIcon} from "@angular/material/icon";
import {RouterOutlet} from "@angular/router";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatIcon,
    RouterOutlet,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}
