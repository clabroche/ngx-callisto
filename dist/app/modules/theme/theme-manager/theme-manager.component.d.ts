import { OnInit, ElementRef } from '@angular/core';
import { CltThemeService } from '../providers/theme.service';
import { CltCommonService } from '../../core/providers/common.service';
export declare class CltThemeManagerComponent implements OnInit {
    themeService: CltThemeService;
    private common;
    mockData: any;
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
