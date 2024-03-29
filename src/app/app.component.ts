import { Component } from "@angular/core";
import { Spinkit } from "ng-http-loader";
import { SpinnerVisibilityService } from "ng-http-loader";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Fonttech";
  public screenWidth: number = 0;
  public spinkit: any = Spinkit;
  public isDarkMode: boolean = false;
  constructor() {
    this.toggleDarkMode();
  }

  public toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle("dark", this.isDarkMode);
  }
}
