import { sandboxOf } from 'angular-playground';
import { DefiPassword } from './Password.validator';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';


const fb = new FormBuilder()
const formPassphrases = fb.group({
  passphrase: ["",Validators.required],
  recheckPassphrase: ["",Validators.required],
}, { validator: DefiPassword.MatchPassword })
export default sandboxOf(DefiPassword, {
  imports: [
    ReactiveFormsModule
  ],
  providers: []
}).add('Simple', {
  context:{
    formPassphrases
  },
  template: `
    <form [formGroup]="formPassphrases">
      <div class="label" for="passphrase">Passphrase</div>
      <input type="password" [formControlName]="'passphrase'" />

      <div class="label" for="recheckPassphrase">Recheck passphrase</div>
      <input type="password" [formControlName]="'recheckPassphrase'" />

      <button [disabled]="formPassphrases.invalid">Submit button</button>
    </form>
    MatchPassword: {{formPassphrases.valid}}
  `
});
