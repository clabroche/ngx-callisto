import { OnChanges, SimpleChanges, EventEmitter, AfterContentInit } from '@angular/core';
import { CltDisplayItemDirective } from './directives/display-item.directive';
export declare class CltDisplayComponent implements OnChanges, AfterContentInit {
    storage: string;
    visible: boolean;
    elements: CltDisplayItemDirective[];
    visibleChange: EventEmitter<{}>;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    changeVisibleState(boolean: boolean): void;
}
