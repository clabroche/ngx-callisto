import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

/**
 * spin an icon
 * @example
 * <button (click)="icon.start()">Click to start</button>
 * <button>
 * | <i class="fa fa-minus-circle" aria-hidden="true" spinning-icon #icon="spinning"></i>
 * </button>
 * <button (click)="icon.stop()">Click to stop</button>
 */
@Directive({
  selector: '[clt-spinning-icon]',
  exportAs: 'clt-spinning-icon'
})
export class CltSpinningIconDirective {

  /**
  * Load some dependencies
  */
  constructor(private renderer: Renderer2, private hostElement: ElementRef) { }

  start(event: any): void {
    this.renderer.addClass(this.hostElement.nativeElement, 'spin-animation');
    this.renderer.addClass(this.hostElement.nativeElement, 'fa-spinner');
  }

  stop() {
    this.renderer.removeClass(this.hostElement.nativeElement, 'spin-animation');
    this.renderer.removeClass(this.hostElement.nativeElement, 'fa-spinner');
  }
}
