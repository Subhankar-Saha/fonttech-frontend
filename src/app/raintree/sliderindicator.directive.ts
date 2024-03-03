// fixed-slider-indicators.directive.ts
import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appFixedSliderIndicators]",
})
export class FixedSliderIndicatorsDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    this.positionSliderIndicators();
  }

  ngAfterViewInit(): void {
    this.positionSliderIndicators();
  }

  private positionSliderIndicators(): void {
    // Calculate the left and bottom positions based on the viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const leftPosition = `${viewportWidth / 2}px`;
    const bottomPosition = `${viewportHeight < 768 ? "5" : "9"}px`; // Adjust as needed
    console.log(viewportHeight, leftPosition, bottomPosition);

    // Apply the new positions to the element
    this.renderer.setStyle(this.el.nativeElement, "left", leftPosition);
    this.renderer.setStyle(this.el.nativeElement, "bottom", bottomPosition);
  }
}
