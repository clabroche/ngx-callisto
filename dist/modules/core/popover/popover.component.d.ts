import { SimpleChange, OnInit, OnChanges } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
/**
 * Make a popoper around items
 * @example
 * <popover [open]="open()" placement='right'>
    |  <button (click)="toggle()" style="width:100px;">hey</button>
    |  <div popover="content">Hey to you! I'm on your right!</div>
    </popover>
 */
export declare class PopoverComponent implements OnInit, OnChanges {
    /**
     * Open or close popover;
     * Default: close
     */
    open: boolean;
    /**
     * Define the placment of popover
     */
    placement: string;
    /**
     * private boolean to watching open/close status
     */
    popover: NgbPopover;
    /**
     * Track changes on input open to reflect status on private keys
     */
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    loadState(open: any): void;
    ngOnInit(): void;
}
