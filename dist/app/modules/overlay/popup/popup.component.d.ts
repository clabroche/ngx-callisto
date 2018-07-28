import { TemplateRef, EventEmitter, ElementRef, Renderer2, AfterContentInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';
/**
 * Display a popup
 */
export declare class CltBodyDirective {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
export declare class CltPopupComponent implements AfterContentInit, OnDestroy {
    private renderer;
    private cdr;
    bodyTemplate: any;
    host: ElementRef;
    hostContainer: ElementRef;
    body: string;
    ghost: boolean;
    title: string;
    cancelButton: string;
    validateButton: string;
    width: any;
    height: any;
    direction: 'left' | 'right' | 'top' | 'bottom' | 'center';
    noActions: boolean;
    openEvent: EventEmitter<{}>;
    context: any;
    _open: boolean;
    visible: boolean;
    visibleChange: EventEmitter<{}>;
    state: string;
    result: Subject<any>;
    form: FormGroup;
    className: string;
    keyEvents: any;
    constructor(renderer: Renderer2, cdr: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    open(context?: any): Subject<any>;
    close($event?: Event): void;
    bindForm(form: FormGroup): this;
    stopPropagation($event: Event): void;
    out(isValidate: any, $event?: Event, value?: any): void;
}
