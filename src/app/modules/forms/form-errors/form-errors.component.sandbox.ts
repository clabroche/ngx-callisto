import { sandboxOf } from 'angular-playground';
import { DefiFormErrorsComponent } from './form-errors.component';
import { Component } from '@angular/core';
import { FormBuilder, EmailValidator, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';


const fb = new FormBuilder()
const form = fb.group({
  email:['', [
    Validators.email,
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(7)
  ]]
})
export default sandboxOf(DefiFormErrorsComponent, {
  imports: [ReactiveFormsModule]
}).add('with simple text', {
    context:{
      form,
    },
    template: `
      <form [formGroup]="form">
        <input type="text" [formControlName]="'email'" placeholder="Email">
        <formErrors [model]="form.controls['email']"></formErrors>
      </form>
      `
  });