import { TemplateRef, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';
/**
 * Display a popup
 * @example
 * popup.open().subscibe(result=>{
 * |  // result = undefined or 'ok'
 * })
 * <popup #popup>
 * |  <div title>Some templating</div>
 * |  <div body>Some templating</div>
 * </popup>
 *
 * formGroup: FormGroup
 * popupWithBind.bindForm(formGroup).open().subscibe(result=>{
 * |  // result = undefined or formGroup.value
 * })
 * <popup #popupWithBind>
 * |  <div title>Some templating</div>
 * |  <div body>Some templating with input control etc...</div>
 * </popup>
 *
 * data = { $implicit: 'Hello', name:'world' }
 * popupWithContext.open(data).subscibe(result=>{
 * |  // result = undefined or 'ok'
 * })
 * <popup #popupWithContext>
 * |  <div title>Some templating</div>
 * |  <div body>Some templating with context like: {{popupWithContext.context.hello}} {{popupWithContext.context.name}} !</div>
 * </popup>
 */
export declare class BodyDirective {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
export declare class PopupComponent {
    bodyTemplate: any;
    body: string;
    title: string;
    cancelButton: string;
    validateButton: string;
    width: string;
    height: string;
    mainColor: string;
    noActions: boolean;
    openEvent: EventEmitter<{}>;
    context: any;
    _open: boolean;
    state: string;
    result: Subject<any>;
    form: FormGroup;
    open(context?: any): Subject<any>;
    close($event?: Event): void;
    bindForm(form: FormGroup): this;
    stopPropagation($event: Event): void;
    out(isValidate: any, $event?: Event, value?: any): void;
}
