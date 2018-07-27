import { AfterViewChecked, ElementRef, Renderer2 } from '@angular/core';
/**
 * Load differents directive with an array of key value
 * @example
 * <input type="text" [formControlName]="'hello'" [validators]="form.controls['hello']"/>
 */
export declare class CltValidatorsDirective implements AfterViewChecked {
    private renderer;
    private hostElement;
    /**
     * Array of key value that describe all directive to put on the element
     */
    cltValidators: any;
    /**
     * Load some dependencies
     */
    constructor(renderer: Renderer2, hostElement: ElementRef);
    /**
     * Launch validator check for the first time init
     */
    ngAfterViewChecked(): void;
    /**
     * Change appearance of input with goodInput/badInout class
     */
    onInputChange(): void;
}
