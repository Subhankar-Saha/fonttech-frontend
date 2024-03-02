import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-franchise-home",
  templateUrl: "./franchise-home.component.html",
  styleUrls: ["./franchise-home.component.css"],
})
export class FranchiseHomeComponent implements OnInit {
  public contentType: string = "";
  onclick(value: string) {
    this.contentType = value;
  }

  constructor() {}
  ngOnInit(): void {}
}
