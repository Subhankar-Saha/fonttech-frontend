import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizationDirective } from './sanitization.directive';



@NgModule({
  declarations: [ SanitizationDirective ],
  imports: [
    CommonModule,
  ],
  exports:[
    SanitizationDirective
  ]
})
export class RaintreeModule { }
