import { OnInit, EventEmitter } from '@angular/core';
export declare class CltPanelComponent implements OnInit {
    header: string;
    toggleable: boolean;
    collapsed: boolean;
    toggleChange: EventEmitter<{}>;
    state: 'open' | 'close';
    ngOnInit(): void;
    toggleCollapse(): void;
}
