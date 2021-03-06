import { Directive, OnDestroy, Input, AfterViewChecked, ElementRef, Renderer2, HostListener} from '@angular/core';

/**
 * Load differents directive with an array of key value
 * @example
 * <input type="text" [formControlName]="'hello'" [validators]="form.controls['hello']"/>
 */
@Directive({
  selector: '[cltValidators]',
})
export class CltValidatorsDirective implements AfterViewChecked {
  /**
   * Array of key value that describe all directive to put on the element
   */
  @Input() cltValidators;

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
  @HostListener('input')
  onInputChange() {
    if (this.hostElement.nativeElement.disabled) {
      this.renderer.removeClass(this.hostElement.nativeElement, 'badInput');
      this.renderer.removeClass(this.hostElement.nativeElement, 'goodInput');
      return;
    }
    if (this.cltValidators.valid) {
      this.renderer.addClass(this.hostElement.nativeElement, 'goodInput');
      this.renderer.removeClass(this.hostElement.nativeElement, 'badInput');
    } else {
      this.renderer.addClass(this.hostElement.nativeElement, 'badInput');
      this.renderer.removeClass(this.hostElement.nativeElement, 'goodInput');
    }
  }
}
