import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RequestMapperService } from "src/app/request-mapper.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  onClick(value: string) {
    if (value === "PRIVACY") {
      this._router.navigate([RequestMapperService.PRIVACY_URL]);
    } else if (value === "TERMS") {
      this._router.navigate([RequestMapperService.TERM_URL]);
    } else if (value === "CONTACT") {
      this._router.navigate([RequestMapperService.CONTACT_URL]);
    }
  }
}
