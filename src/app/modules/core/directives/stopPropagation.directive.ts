import { Directive, HostListener } from '@angular/core';

/**
 * Prevent bubbling of events
 * @example
 *  <div (click)="doSomething()"> // not call when click happenned on child
 *  | <div defi-click-stop-propagation></div>
 *  </div>
 */
@Directive({
  selector: '[defi-click-stop-propagation]'
})
export class DefiClickStopPropagation {
  /**
   * Trigger click event to stop propagation
   */
  @HostListener('click', ['$event'])
  public onClick(event: any): void {
    event.stopPropagation();
  }
}
