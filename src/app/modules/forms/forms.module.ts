import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CltFormErrorsComponent } from './form-errors/form-errors.component';
import { CltDebounceInputDirective } from './directives/debounceInput.directive';
import { CltValidatorsDirective } from './directives/validators.directive';
import { CltShowPasswordDirective } from './directives/showPassword.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CltFormErrorsComponent,
    CltDebounceInputDirective,
    CltValidatorsDirective,
    CltShowPasswordDirective,
  ],
  exports: [
    CltFormErrorsComponent,
    CltDebounceInputDirective,
    CltValidatorsDirective,
    CltShowPasswordDirective,
  ]
})
export class CltFormsModule { }
