import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SnackService } from 'src/app/notification/snack.service';
import { MessageService } from 'src/app/message.service';
import { TransmissionService } from 'src/app/raintree/transmission.service';
import { Router } from '@angular/router';
import { RequestMapperService } from 'src/app/request-mapper.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  public userNameFormControl: FormControl = new FormControl('', [
    Validators.required
  ]);

  public oldPasswordFormControl: FormControl = new FormControl('', [
    Validators.required
  ]);

  public newPasswordFormControl: FormControl = new FormControl('', [
    Validators.required
  ]);

  public confirmPasswordFormControl: FormControl = new FormControl('', [
    Validators.required
  ])

  public hidePassword1: boolean = true;
  public hidePassword2: boolean = true;
  public hidePassword3: boolean = true;

  constructor(
    private _snack: SnackService,
    private _transmit: TransmissionService,
    private _router: Router
  ) { }
  
  public areAllFieldsValid(): boolean {
		return (
			this.userNameFormControl.valid &&
			this.oldPasswordFormControl.valid &&
      this.newPasswordFormControl.valid &&
      this.confirmPasswordFormControl.valid 
		);
	}
  public submit() {

    if (!this.areAllFieldsValid()) {
			this._snack.error("Field Value Missing");
			return;
		}

    if(this.newPasswordFormControl.value !== this.confirmPasswordFormControl.value){
      return this._snack.error("new passoword and confirm password mismatch")
     }

    if (this.areAllFieldsValid()){
      let obj = {
        userName: this.userNameFormControl.value,
        oldPassword: this.oldPasswordFormControl.value,
        newPassword: this.newPasswordFormControl.value
      }
      // this._transmit.executePostRequest(RequestMapperService.RESET_PASSWORD_URL, obj)
      //   .subscribe({
      //     next: res => {
      //       if (res["success"]) {
      //         this._snack.success("Password Reset Successful");
      //         this._router.navigate(['/'])
      //       }
      //     },
      //     error: (error: any) => {
      //       this._snack.warning(error);
      //     }
      //   })
    }
  }

  public isPasswordMismatch(): boolean {
    return this.newPasswordFormControl.value !== this.confirmPasswordFormControl.value && this.confirmPasswordFormControl.dirty;
  }
}
