import { ElementRef, Renderer2, OnInit } from '@angular/core';
/**
 * Load differents directive with an array of key value
 * @example
 * <input type="text" [formControlName]="'hello'" [validators]="form.controls['hello']"/>
 */
export declare class DefiShowPasswordDirective implements OnInit {
    private renderer;
    private hostElement;
    /**
     * Load some dependencies
     */
    constructor(renderer: Renderer2, hostElement: ElementRef);
    ngOnInit(): void;
}
