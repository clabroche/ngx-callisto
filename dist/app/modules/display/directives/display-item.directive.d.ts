import { ElementRef, Renderer2, AfterViewInit, ChangeDetectorRef } from '@angular/core';
export declare class CltDisplayItemDirective implements AfterViewInit {
    elem: ElementRef;
    private renderer;
    private cdr;
    name: any;
    display: boolean;
    storage: string;
    constructor(elem: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    toggle({checked}: {
        checked: any;
    }): void;
}
