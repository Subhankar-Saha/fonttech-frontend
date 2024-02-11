import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackService } from 'src/app/notification/snack.service';
import { TransmissionService } from 'src/app/raintree/transmission.service';

@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.css']
})
export class FranchiseComponent implements OnInit {
  public manualEntryForm: FormGroup;
  public disabled: boolean = false;
  constructor(private formBuilder: FormBuilder, private snackbar: SnackService, private _transmit: TransmissionService, private _router : Router){
    this.manualEntryForm = this.formBuilder.group({
      'fullName': ['', [Validators.required, this._transmit.noWhitespaceValidator]],
      'state': ['',  [Validators.required, this._transmit.noWhitespaceValidator]],
      'pincode': ['',  [Validators.required, this._transmit.noWhitespaceValidator]],
      'mobileNo': ['', [Validators.required, this._transmit.noWhitespaceValidator]],
      'message': ['', [Validators.required, this._transmit.noWhitespaceValidator]],
      'address': ['', [Validators.required, this._transmit.noWhitespaceValidator]],
      'emailId': ['', [Validators.required, this._transmit.noWhitespaceValidator]]
    });
  }

  ngOnInit(): void {
      
  }

  onSubmit(): void {
    console.log(this.manualEntryForm, this.manualEntryForm.getRawValue())
    if (this.manualEntryForm.invalid) {
      this.snackbar.error("Please fill mandatory field")
      return
    }
  }
}
