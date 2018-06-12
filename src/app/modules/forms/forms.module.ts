import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefiFormErrorsComponent } from './form-errors/form-errors.component';
import { DefiDebounceInputDirective } from './directives/debounceInput.directive';
import { DefiValidatorsDirective } from './directives/validators.directive';
import { DefiShowPasswordDirective } from './directives/showPassword.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DefiFormErrorsComponent,
    DefiDebounceInputDirective,
    DefiValidatorsDirective,
    DefiShowPasswordDirective,
  ],
  exports: [
    DefiFormErrorsComponent,
    DefiDebounceInputDirective,
    DefiValidatorsDirective,
    DefiShowPasswordDirective,
  ]
})
export class DefiFormsModule { }
