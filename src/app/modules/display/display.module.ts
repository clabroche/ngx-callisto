import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CltDisplayComponent } from './display.component';
import { CltDisplayItemDirective } from './directives/display-item.directive';
import { CltOverlayModule } from '../overlay/overlay.module';

@NgModule({
  imports: [
    CommonModule,
    CltOverlayModule
  ],
  declarations: [CltDisplayComponent, CltDisplayItemDirective],
  exports: [CltDisplayComponent, CltDisplayItemDirective]
})
export class CltDisplayModule { }
