import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  public contactNo: string = "18008909594";
  public contactNoLink: string = `tel:${this.contactNo}`;
  ngOnInit(): void {}
}
