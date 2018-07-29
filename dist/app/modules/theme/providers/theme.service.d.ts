export declare class CltThemeService {
    rootElement: Element;
    themes: {
        name: string;
        theme: any;
    }[];
    theme: any;
    constructor();
    reload(theme?: any): void;
    setStyle(property: any, value: any): void;
}
