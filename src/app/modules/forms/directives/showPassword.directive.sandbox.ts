import { sandboxOf } from 'angular-playground';
import { DefiShowPasswordDirective } from './showPassword.directive';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

const fb = new FormBuilder()
const form = fb.group({
  hello: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
})
export default sandboxOf(DefiShowPasswordDirective, {
  imports: [ReactiveFormsModule],
}).add('Simple', {
  context:{form},
  template: `
  <form [formGroup]="form">
    Validators: required, minlength(6), maxlength(8)
    <div style="position:relative;">
      <input type="password" [formControlName]="'hello'" show-password/>
    </div>

    <button [disabled]="form.invalid">Submit button</button>
  </form>
  Valid ?: {{form.valid}}
  `
});