import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { RequestMapperService } from './request-mapper.service';

const routes: Routes = [
	{
		path: RequestMapperService.BASE_RELATIVE_URL,
		// canActivate: [AuthGuard],
		redirectTo: RequestMapperService.getAbsoluteUrl(RequestMapperService.HOME),
		pathMatch: 'full'
	},
	// {
	// 	path: RequestMapperService.DASHBOARD_URL,
	// 	// canActivate: [AuthGuard],
	// 	loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
	// },
	{
		path: RequestMapperService.HOME,
		// canActivate: [AuthGuard],
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
