import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SnackService } from "src/app/notification/snack.service";
import { TransmissionService } from "src/app/raintree/transmission.service";
import { RequestMapperService } from "src/app/request-mapper.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
})
export class RegistrationComponent implements OnInit {
  public manualEntryForm: FormGroup;
  public disabled: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private snackbar: SnackService,
    private _transmit: TransmissionService,
    private _router: Router,
  ) {
    this.manualEntryForm = this.formBuilder.group({
      firstName: [
        "",
        [Validators.required, this._transmit.noWhitespaceValidator],
      ],
      lastName: ["", []],
      companyName: ["", []],
      mobileNo: [
        "",
        [Validators.required, this._transmit.noWhitespaceValidator],
      ],
      aadharNo: [
        "",
        [Validators.required, this._transmit.noWhitespaceValidator],
      ],
      gstNo: ["", []],
      emailId: [
        "",
        [Validators.required, this._transmit.noWhitespaceValidator],
      ],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.manualEntryForm, this.manualEntryForm.getRawValue());
    if (this.manualEntryForm.invalid) {
      this.snackbar.error("Please fill mandatory field");
      return;
    }
  }

  public navigateLogin(): void {
    console.log("hey I am Here");
    this._router.navigate([
      `${RequestMapperService.AUTH_URL}/${RequestMapperService.LOGIN_URL}`,
    ]);
  }
}
