import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MessageService} from 'src/app/message.service';
import {SnackService} from 'src/app/notification/snack.service';
import {AuthenticationService} from "../authentication.service";

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

	public userNameFormControl: FormControl = new FormControl('', [
		Validators.required
	]);

	public passwordFormControl: FormControl = new FormControl('', [
		Validators.required
	])

	public hidePassword: boolean = true;

	constructor(
		private _api: AuthenticationService,
		private _snack: SnackService
	) {
	}

	public areAllFieldsValid(): boolean {
		return (
			this.userNameFormControl.valid &&
			this.passwordFormControl.valid
		);
	}

	public disableFormControls(): void {
		this.userNameFormControl.disable();
		this.passwordFormControl.disable();
	}

	public enableFormControls(): void {
		this.userNameFormControl.enable();
		this.passwordFormControl.enable();
	}

	public login(): void {
		// if (!this.areAllFieldsValid()) {
		// 	this._snack.error(MessageService.WRONG_CREDENTIAL_ERROR);
		// 	return;
		// }

		// this.disableFormControls();

		// this._api.authenticate(
		// 	this.userNameFormControl.value,
		// 	this.passwordFormControl.value,
		// 	() => {},
		// 	() => this.enableFormControls(),
		// 	() => this.enableFormControls()
		// )
	}

}
