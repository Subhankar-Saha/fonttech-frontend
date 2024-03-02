import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  forwardRef,
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Directive({
  selector: "[inputSanitization]",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SanitizationDirective),
      multi: true,
    },
  ],
})
export class SanitizationDirective {
  @Input() trimSpaces: boolean = false;
  @Input() convertToLowercase: boolean = false;
  @Input() convertToUppercase: boolean = false;
  @Input() supportedCharaterRange: string | undefined;

  private onChange: any;
  private onTouched: any;

  constructor(
    private _elem: ElementRef,
    private _renderer: Renderer2,
  ) {}

  @HostListener("input", ["$event.target.value"])
  onInput(value: string) {
    const transformedValue = this.sanitization(value);
    this._renderer.setProperty(
      this._elem.nativeElement,
      "value",
      transformedValue,
    );
    if (this.onChange) {
      this.onChange(transformedValue);
    }
    if (this.onTouched) {
      this.onTouched();
    }
  }

  writeValue(value: any) {
    const transformedValue = this.sanitization(value);
    this._renderer.setProperty(
      this._elem.nativeElement,
      "value",
      transformedValue,
    );
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this._renderer.setProperty(
      this._elem.nativeElement,
      "disabled",
      isDisabled,
    );
  }

  sanitization(inputString: string = "") {
    if (this.trimSpaces) {
      inputString = inputString.trim();
    }
    if (this.supportedCharaterRange) {
      const pattern = new RegExp(`[^${this.supportedCharaterRange}]`, "g");
      inputString = inputString.replace(pattern, "");
    }
    if (this.convertToLowercase) {
      inputString = inputString.toLowerCase();
      return inputString;
    }
    if (this.convertToUppercase) {
      inputString = inputString.toUpperCase();
    }
    return inputString;
  }
}
