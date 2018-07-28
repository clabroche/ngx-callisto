import { AbstractControl } from '@angular/forms';
/**
 * Check if passphrase are the same
 */
export declare class CltPassword {
    /**
     * check function
     */
    static MatchPassword(AC: AbstractControl): {
        recheckPassphrase: boolean;
    };
    /**
     * Return a password
     */
    static GeneratePassword(length?: number): string;
}
