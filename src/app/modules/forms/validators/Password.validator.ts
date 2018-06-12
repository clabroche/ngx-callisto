import { AbstractControl } from '@angular/forms';

/**
 * Check if passphrase are the same
 * @example 
 *  fb.group({
 *      passphrase: ["",Validators.required],
 *      recheckPassphrase: ["",Validators.required],
 *  }, { validator: MatchPassword.MatchPassword })
 * 
 *  <form [formGroup]="formPassphrases">
 *  |  <div class="label" for="passphrase">Passphrase</div>
 *  |  <input type="password" [formControlName]="'passphrase'" />
 *  |
 *  |  <div class="label" for="recheckPassphrase">Recheck passphrase</div>
 *  |  <input type="password" [formControlName]="'recheckPassphrase'" />
 *  |
 *  |  <button [disabled]="formPassphrases.invalid">Submit button</button>
 *  </form>
 *  MatchPassword: {{formPassphrases.valid}}
 */
export class DefiPassword {

    /**
     * check function
     */
    static MatchPassword(AC: AbstractControl) {
        let confirmPassword = AC.value.passphrase
        let password = AC.value.recheckPassphrase; // to get value in input tag
        if (confirmPassword !== password) {
            return { recheckPassphrase: true }
        } else return null
    }
    /**
     * Return a password
     */
    static GeneratePassword(length:number = 12):string {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-="
        let retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }
}