import { Directive, OnDestroy, Input, AfterViewChecked, ElementRef, Renderer2} from '@angular/core';

/**
 * Load differents directive with an array of key value
 * @example
 * <input type="text" [formControlName]="'hello'" [validators]="form.controls['hello']"/>
 */
@Directive({
  selector: '[defi-validators]',
  host: {
    '(input)': 'onInputChange($event)'
  }
})
export class DefiValidatorsDirective implements AfterViewChecked {
  /**
   * Array of key value that describe all directive to put on the element
   */
  @Input('defi-validators') validators;

  /**
   * Load some dependencies
   */
  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  /**
   * Launch validator check for the first time init
   */
  ngAfterViewChecked() {
    this.onInputChange();
  }

  /**
   * Change appearance of input with goodInput/badInout class
   */
  onInputChange() {
    if (this.hostElement.nativeElement.disabled) {
      this.renderer.removeClass(this.hostElement.nativeElement, 'badInput');
      this.renderer.removeClass(this.hostElement.nativeElement, 'goodInput');
      return;
    }
    if (this.validators.valid) {
      this.renderer.addClass(this.hostElement.nativeElement, 'goodInput');
      this.renderer.removeClass(this.hostElement.nativeElement, 'badInput');
    } else {
      this.renderer.addClass(this.hostElement.nativeElement, 'badInput');
      this.renderer.removeClass(this.hostElement.nativeElement, 'goodInput');
    }
  }
}
