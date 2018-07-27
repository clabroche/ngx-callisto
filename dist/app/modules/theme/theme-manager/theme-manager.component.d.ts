import { OnInit, ElementRef } from '@angular/core';
import { ThemeService } from '../providers/theme.service';
import { CltCommonService } from '../../core/providers/common.service';
export declare class ThemeManagerComponent implements OnInit {
    themeService: ThemeService;
    private common;
    mockData: any;
    variables: any[];
    currentTheme: string;
    exportButton: ElementRef;
    exportInput: ElementRef;
    constructor(themeService: ThemeService, common: CltCommonService);
    ngOnInit(): void;
    changeTheme(theme: any): void;
    difference(): {};
    changeStyle(variable: any, style: any): void;
    export(): void;
    getTheme(): string;
}
