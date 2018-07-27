import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefiDisplayComponent } from './defi-display.component';
import { DefiDisplayItemDirective } from './directives/defi-display-item.directive';
import { DefiOverlayModule } from '../overlay/overlay.module';

@NgModule({
  imports: [
    CommonModule,
    DefiOverlayModule
  ],
  declarations: [DefiDisplayComponent, DefiDisplayItemDirective],
  exports: [DefiDisplayComponent, DefiDisplayItemDirective]
})
export class DefiDisplayModule { }
