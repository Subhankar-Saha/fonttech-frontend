import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestMapperService } from '../request-mapper.service';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [
	{
		path: RequestMapperService.BASE_RELATIVE_URL,
		component: LoginComponent
	},
	{
		path: RequestMapperService.FORGET_PASSWORD_URL,
		component: ForgetPasswordComponent
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
