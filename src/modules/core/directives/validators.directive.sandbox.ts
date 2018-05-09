import { sandboxOf } from 'angular-playground';
import { ValidatorsDirective } from './validators.directive';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

const fb = new FormBuilder()
const form = fb.group({
  hello: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
})
export default sandboxOf(ValidatorsDirective, {
  imports: [ReactiveFormsModule],
}).add('Simple', {
  context:{form},
  template: `
  <form [formGroup]="form">
    Validators: required, minlength(6), maxlength(8)
    <input type="text" [formControlName]="'hello'" [validators]="form.controls['hello']"/>

    <button [disabled]="form.invalid">Submit button</button>
  </form>
  Valid ?: {{form.valid}}
  `
});