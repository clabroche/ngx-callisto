import { Pipe, PipeTransform } from '@angular/core';

/**
 * Transform string to be a valid HtmlID
 */
@Pipe({ name: 'clt-toId', pure: true })
export class CltToId implements PipeTransform {

    /**
     * Transform function
     * It remove special characters
     */
    transform(value: any) {
        return value.split(' ').join('').replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    }
}
