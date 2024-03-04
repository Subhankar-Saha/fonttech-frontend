import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-franchise-contact",
  templateUrl: "./franchise-contact.component.html",
  styleUrls: ["./franchise-contact.component.css"],
})
export class FranchiseContactComponent {
  public contactNo: string = "18008909594";
  public contactNoLink: string = `tel:${this.contactNo}`;
}
