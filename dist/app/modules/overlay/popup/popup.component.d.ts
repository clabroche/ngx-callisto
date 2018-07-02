import { Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';
export declare class PopupComponent {
    body: string;
    title: string;
    cancelButton: string;
    validateButton: string;
    width: string;
    height: string;
    mainColor: string;
    noActions: boolean;
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
