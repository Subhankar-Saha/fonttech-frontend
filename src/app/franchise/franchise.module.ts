import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FranchiseRoutingModule } from './franchise-routing.module';
import { FranchiseComponent } from './franchise/franchise.component';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RaintreeModule } from '../raintree/raintree.module';


@NgModule({
  declarations: [
    FranchiseComponent
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
