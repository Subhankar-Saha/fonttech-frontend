import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestMapperService } from '../request-mapper.service';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
	{
		path: RequestMapperService.BASE_RELATIVE_URL,
		component: DashboardComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }
