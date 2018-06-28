/**
 * Prevent bubbling of events
 * @example
 *  <div (click)="doSomething()"> // not call when click happenned on child
 *  | <div defi-click-stop-propagation></div>
 *  </div>
 */
export declare class DefiClickStopPropagation {
    /**
     * Trigger click event to stop propagation
     */
    onClick(event: any): void;
}
