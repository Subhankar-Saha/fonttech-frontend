import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


@NgModule({
	declarations: [
		LoginComponent,
		LoginFormComponent,
 		ForgetPasswordComponent
	],
	imports: [
		CommonModule,
		AuthenticationRoutingModule,
		MatIconModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		FlexLayoutModule
	]
})
export class AuthenticationModule { }
