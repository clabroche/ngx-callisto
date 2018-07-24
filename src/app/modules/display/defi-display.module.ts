import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefiDisplayComponent } from './defi-display.component';
import { DefiDisplayItemDirective } from './directives/defi-display-item.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [DefiDisplayComponent, DefiDisplayItemDirective],
  exports: [DefiDisplayComponent, DefiDisplayItemDirective]
})
export class DefiDisplayModule { }
