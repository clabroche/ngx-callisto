import { Renderer2, ElementRef } from '@angular/core';
/**
 * spin an icon
 * @example
 * <button (click)="icon.start()">Click to start</button>
 * <button>
 * | <i class="fa fa-minus-circle" aria-hidden="true" spinning-icon #icon="spinning"></i>
 * </button>
 * <button (click)="icon.stop()">Click to stop</button>
 */
export declare class CltSpinningIconDirective {
    private renderer;
    private hostElement;
    /**
    * Load some dependencies
    */
    constructor(renderer: Renderer2, hostElement: ElementRef);
    start(event: any): void;
    stop(): void;
}
