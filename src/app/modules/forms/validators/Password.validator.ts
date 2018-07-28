import { AbstractControl } from '@angular/forms';

/**
 * Check if passphrase are the same
 */
export class CltPassword {

    /**
     * check function
     */
    static MatchPassword(AC: AbstractControl) {
        const confirmPassword = AC.value.passphrase;
        const password = AC.value.recheckPassphrase; // to get value in input tag
        if (confirmPassword !== password) {
            return { recheckPassphrase: true };
        } else return null;
    }
    /**
     * Return a password
     */
    static GeneratePassword(length: number = 12): string {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        let retVal = '';
        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }
}
