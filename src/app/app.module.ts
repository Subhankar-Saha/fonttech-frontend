import { NgModule } from "@angular/core";
import { BrowserModule, HammerModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavigationModule } from "./navigation/navigation.module";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { NgHttpLoaderModule } from "ng-http-loader";
import { ReactiveFormsModule } from "@angular/forms";
import "hammerjs";
import { GoogleTagManagerModule } from "angular-google-tag-manager";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavigationModule,
    HttpClientModule,
    MatDialogModule,
    NgHttpLoaderModule.forRoot(),
    ReactiveFormsModule,
    HammerModule,
    GoogleTagManagerModule.forRoot({
      id: "G-LWCBQGDQKT",
    }),
  ],
  providers: [{ provide: "googleTagManagerId", useValue: "G-LWCBQGDQKT" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
