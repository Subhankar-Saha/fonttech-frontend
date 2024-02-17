import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RaintreeModule } from '../raintree/raintree.module';

import { FranchiseRoutingModule } from './franchise-routing.module';
import { FranchiseRequestFormComponent } from './franchise-request-form/franchise-request-form.component';
import { FranchiseHomeComponent } from './franchise-home/franchise-home.component';
import { FranchiseOverviewContentComponent } from './franchise-overview-content/franchise-overview-content.component';
import { FranchisePartnershipContentComponent } from './franchise-partnership-content/franchise-partnership-content.component';
import { FranchiseBusinessPartnerContentComponent } from './franchise-business-partner-content/franchise-business-partner-content.component';
import { FranchiseBusinessProposalContentComponent } from './franchise-business-proposal-content/franchise-business-proposal-content.component';


@NgModule({
  declarations: [
    FranchiseRequestFormComponent,
    FranchiseHomeComponent,
    FranchiseOverviewContentComponent,
    FranchisePartnershipContentComponent,
    FranchiseBusinessPartnerContentComponent,
    FranchiseBusinessProposalContentComponent
  ],
  imports: [
    CommonModule,
    FranchiseRoutingModule,
    MatIconModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		RaintreeModule
  ]
})
export class FranchiseModule { }
