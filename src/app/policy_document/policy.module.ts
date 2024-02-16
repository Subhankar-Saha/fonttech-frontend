import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { policyRoutingModule } from './policy-routing.module';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';


@NgModule({
  declarations: [
    PrivacyComponent,
    TermsComponent
  ],
  imports: [
    CommonModule,
    policyRoutingModule
  ]
})
export class policyModule { }
