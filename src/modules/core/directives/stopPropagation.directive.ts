import { Directive, HostListener } from "@angular/core";

/**
 * Prevent bubbling of events
 * @example 
 *  <div (click)="doSomething()"> // not call when click happenned on child
 *  | <div click-stop-propagation></div>
 *  </div>
 */
@Directive({
  selector: "[click-stop-propagation]"
})
export class ClickStopPropagation {
  /**
   * Trigger click event to stop propagation
   */
  @HostListener("click", ["$event"])
  public onClick(event: any): void {
    event.stopPropagation();
  }
}
