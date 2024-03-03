import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appScrollableText]",
})
export class ScrollableTextDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener("window:scroll", ["$event"])
  onScroll(event: Event): void {
    // Get the scroll position
    const scrollPosition = window.scrollY;

    // Calculate the translation based on the scroll position
    const translation = `translate3d(${scrollPosition * 0.1}%, 0, 0)`;

    // Apply the transformation to the element
    this.renderer.setStyle(this.el.nativeElement, "transform", translation);
  }
}
