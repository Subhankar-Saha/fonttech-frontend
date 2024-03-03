import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SanitizationDirective } from "./sanitization.directive";
import { ScrollableTextDirective } from "./scrollable.directive";

@NgModule({
  declarations: [SanitizationDirective, ScrollableTextDirective],
  imports: [CommonModule],
  exports: [SanitizationDirective, ScrollableTextDirective],
})
export class RaintreeModule {}
