import { EventEmitter, OnDestroy, OnInit, SimpleChanges, OnChanges } from '@angular/core';
/**
 * Directive that debounce an element that supports keyListener
 * @example
 * <input type="text" debounce-input (debounce)="doSomething($event.target.value)" [debounceTime]="200" />
 */
export declare class DebounceInputDirective implements OnInit, OnDestroy, OnChanges {
    /**
     * Describe the debounce time; Default: 500ms
     */
    debounceTime: number;
    /**
     * Emit and call function after the debounce time
     */
    debounce: EventEmitter<{}>;
    /**
     * Observable that register the flow
     */
    private subject;
    /**
     * Instance of the observable to close when component die
     */
    private subscription;
    /**
     * Register observable pipe that describe the flow of the debounce directive
     */
    ngOnInit(): void;
    createSubsription(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Unregister observable on the component destruct
     */
    ngOnDestroy(): void;
    /**
     * Trigger keyup event and inject it to the pipe of the debounce
     */
    keyupEvent(event: any): void;
}
