import { PipeTransform } from '@angular/core';
/**
 * Transform string to be a valid HtmlID
 */
export declare class ToId implements PipeTransform {
    /**
     * Transform function
     * It remove special characters
     */
    transform(value: any): any;
}
