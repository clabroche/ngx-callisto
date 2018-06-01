import { SimpleChange, OnChanges, AfterContentInit, ElementRef, Renderer2 } from '@angular/core';
/**
 * Make a popoper around items
 * @example
 * <popover [open]="open()" placement='right'>
    |  <button (click)="toggle()" style="width:100px;">hey</button>
    |  <div popover="content">Hey to you! I'm on your right!</div>
    </popover>
 */
export declare class PopoverComponent implements AfterContentInit, OnChanges {
    private renderer;
    /**
     * Open or close popover;
     * Default: close
     */
    open: boolean;
    /**
     * Define the placment of popover
     */
    placement: string;
    popupContainer: ElementRef;
    positionClass: string;
    resizeDetector: any;
    constructor(renderer: Renderer2);
    loadState(open: any): void;
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    ngAfterContentInit(): void;
}
