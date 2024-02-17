import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FranchiseRequestFormComponent } from './franchise-request-form/franchise-request-form.component';
import { FranchiseHomeComponent } from './franchise-home/franchise-home.component';

const routes: Routes = [
  { path: 'apply', component: FranchiseRequestFormComponent },
  { path: '', component: FranchiseHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FranchiseRoutingModule {}
