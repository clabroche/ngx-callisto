/**
 * Describe differences between two object
 */
export interface differences {
    /**
     * Only when two same prop have not same values
     */
    different: Array<string>;
    /**
     * Only missing properties from the first object
     */
    missing_from_first: Array<string>;
    /**
     * Only missing properties from the second object
     */
    missing_from_second: Array<string>;
}
/**
 * Share variable and function commonly use in the app
 */
export declare class CommonService {
    /**
     * Api URL
     */
    api: string;
    /**
     * GraphQL URL
     */
    graphQL: string;
    /**
     * Interval in ms between two refresh
     */
    refreshTokenInterval: number;
    /**
     * Instanciate all members
     */
    constructor();
    /**
     * Test equality objects
     */
    equalityObjects(a: any, b: any): boolean;
    /**
     * Load all
     */
    differences(a: any, b: any): differences;
    /**
     * Export a datable to an csv
     */
    /**
     * Wait function
     */
    wait(ms: any): Promise<{}>;
    /**
     * Flat an object
     */
    flatten(obj: any): {};
    /**
     * stringifyWithoutPropertiesQuote
     */
    stringifyWithoutPropertiesQuote(obj: any): string;
}
