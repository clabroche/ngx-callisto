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
export declare class DefiPassword {
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
