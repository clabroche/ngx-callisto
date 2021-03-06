import { OnInit, ElementRef } from '@angular/core';
import { CltThemeService } from '../providers/theme.service';
import { CltCommonService } from '../../core/providers/common.service';
export declare class CltThemeManagerComponent implements OnInit {
    themeService: CltThemeService;
    private common;
    mockData: {
        "first_name": string;
        "last_name": string;
        "email": string;
        "gender": string;
        "city": string;
        "street_address": string;
    }[];
    variables: any[];
    currentTheme: string;
    exportButton: ElementRef;
    exportInput: ElementRef;
    constructor(themeService: CltThemeService, common: CltCommonService);
    ngOnInit(): void;
    changeTheme(theme: any): void;
    difference(): {};
    changeStyle(variable: any, style: any): void;
    export(): void;
    getTheme(): string;
}
