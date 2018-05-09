import { Component,Input} from "@angular/core";
import { FormControl, Validators, NgModel, Validator } from "@angular/forms";


/**
 * Encapsule an input and all validators attached
 * @example
 * 
 *  <form (submit)="" [formGroup]="form">
    | <input type="text" [formControlName]="'email'" placeholder="Email">
    | <formErrors [model]="form.controls['email']"></formErrors>
    </form>
 */
@Component({
  selector: "formErrors",
  templateUrl: "./form-errors.component.html",
  styleUrls: ["./form-errors.component.scss"]
})
export class FormErrorsComponent {
  /**
   * NgModel to tracks invalid status
   */
  @Input('model') model: any
  /**
   * Override pattern display
   */
  @Input('patternName') patternName :string

}
 