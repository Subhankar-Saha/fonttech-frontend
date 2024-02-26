import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { RequestMapperService } from './request-mapper.service';

const routes: Routes = [
	{
		path: RequestMapperService.BASE_RELATIVE_URL,
		redirectTo: RequestMapperService.getAbsoluteUrl(RequestMapperService.BASE_RELATIVE_URL),
		pathMatch: 'full'
	},
	{
		path: RequestMapperService.BASE_RELATIVE_URL,
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
	{
		path: RequestMapperService.HOME,
		// canActivate: [AuthGuard],
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
	{
		path: RequestMapperService.AUTH_URL,
		// canActivate: [AuthGuard],
		loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
	},
	{
		path: RequestMapperService.FRANCHISE_URL,
		// canActivate: [AuthGuard],
		loadChildren: () => import('./franchise/franchise.module').then(m => m.FranchiseModule)
	},
	{
		path: RequestMapperService.CONTACT_URL,
		// canActivate: [AuthGuard],
		loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
	},
	{
		path: RequestMapperService.PAGES_URL,
		// canActivate: [AuthGuard],
		loadChildren: () => import('./policy_document/policy.module').then(m => m.policyModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
