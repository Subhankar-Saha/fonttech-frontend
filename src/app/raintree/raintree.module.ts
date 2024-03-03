import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SanitizationDirective } from "./sanitization.directive";
import { ScrollableTextDirective } from "./scrollable.directive";
import { FixedSliderIndicatorsDirective } from "./sliderindicator.directive";

@NgModule({
  declarations: [
    SanitizationDirective,
    ScrollableTextDirective,
    FixedSliderIndicatorsDirective,
  ],
  imports: [CommonModule],
  exports: [
    SanitizationDirective,
    ScrollableTextDirective,
    FixedSliderIndicatorsDirective,
  ],
})
export class RaintreeModule {}
