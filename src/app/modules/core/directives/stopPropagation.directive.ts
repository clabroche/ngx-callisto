import { Directive, HostListener } from '@angular/core';

/**
 * Prevent bubbling of events
 */
@Directive({
  selector: '[clt-click-stop-propagation]'
})
export class CltClickStopPropagationDirective {
  /**
   * Trigger click event to stop propagation
   */
  @HostListener('click', ['$event'])
  public onClick(event: any): void {
    event.stopPropagation();
  }
}
