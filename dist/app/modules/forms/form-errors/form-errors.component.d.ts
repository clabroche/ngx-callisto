/**
 * Encapsule an input and all validators attached
 * @example
 *
 *  <form (submit)="" [formGroup]="form">
    | <input type="text" [formControlName]="'email'" placeholder="Email">
    | <formErrors [model]="form.controls['email']"></formErrors>
    </form>
 */
export declare class DefiFormErrorsComponent {
    /**
     * NgModel to tracks invalid status
     */
    model: any;
    /**
     * Override pattern display
     */
    patternName: string;
}
