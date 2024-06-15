import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./authentication/auth.guard";
import { RequestMapperService } from "./request-mapper.service";
import { HomeModule } from "./home/home.module";
import { AuthenticationModule } from "./authentication/authentication.module";
import { FranchiseModule } from "./franchise/franchise.module";
import { ContactModule } from "./contact/contact.module";
import { policyModule } from "./policy_document/policy.module";
import { HomeComponent } from "./home/home/home.component";

const routes: Routes = [
  {
    path: RequestMapperService.BASE_RELATIVE_URL,
    redirectTo: RequestMapperService.getAbsoluteUrl(
      RequestMapperService.HOME,
    ),
    pathMatch: "full",
  },
  {
    path: RequestMapperService.HOME,
    // canActivate: [AuthGuard],
    component: HomeComponent,
  },
  {
    path: RequestMapperService.AUTH_URL,
    // canActivate: [AuthGuard],
    loadChildren: () => AuthenticationModule,
  },
  {
    path: RequestMapperService.FRANCHISE_URL,
    // canActivate: [AuthGuard],
    loadChildren: () => FranchiseModule,
  },
  {
    path: RequestMapperService.CONTACT_URL,
    // canActivate: [AuthGuard],
    loadChildren: () => ContactModule,
  },
  {
    path: RequestMapperService.PAGES_URL,
    // canActivate: [AuthGuard],
    loadChildren: () => policyModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
